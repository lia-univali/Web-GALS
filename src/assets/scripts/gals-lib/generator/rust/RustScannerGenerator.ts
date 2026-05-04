import { List } from "../../DataStructures";
import { FiniteAutomata } from "../FiniteAutomata";
import { Options } from "../Options";

/**
 * @author Vinícius
 */

export class RustScannerGenerator
{
	public generate(fa: FiniteAutomata, options: Options): Map<string, string>
	{		
		const result: Map<string, string> = new Map();
		
		let scanner: string = "";
		const pkgpath = options.pkgName !== "" ? options.pkgName + "/" : "";
		
		if (options.generateScanner == true)
		{
			if (fa != null)
			{
				scanner = this.buildScanner(fa, options);
			}
			else
			{
				scanner = "";
			}

			result.set(`src/${pkgpath}scanner.rs`, scanner);
		}
		
		return result;
	}

	private buildScanner(fa: FiniteAutomata, options: Options): string
	{
		const scannername: string = options.scannerName;
		const pkgpath = options.pkgName !== "" ? options.pkgName + "::" : "";
		const stringmd: boolean = options.input == Options.INPUT_STRING;

		let result = ""+
`
#![allow(unused)]

use std::io::{BufReader, Read, Seek, SeekFrom};

use num_traits::FromPrimitive;

use crate::${pkgpath}constants::*;
use crate::${pkgpath}constants::*;
use crate::${pkgpath}errors::AnalysisError;
use crate::${pkgpath}token::*;

pub struct ${scannername}${stringmd ? "" : "<T: Read + Seek>"} {
${stringmd ?
`    input: String,
`
	:
`    input: BufReader<T>,
     shadow: String,
`
}    pos: usize,
}

impl${stringmd ? "" : "<T: Read + Seek>"} ${scannername}${stringmd ? "" : "<T>"} {
    pub fn new(input: ${stringmd ? "String" : "BufReader<T>"}) -> Self {
        ${scannername} {
            input,
${stringmd ? "" : "\t\tshadow: String::new(),"
}            pos: 0,
        }
    }
    pub fn next_token(&mut self) -> Option<Result<Token, AnalysisError>> {
        let mut start = self.pos;
        let mut newchar: Option<u8> = None;
        let mut iters = 0;
        let mut state = 0;
        let mut old_state: i32 = 0i32;
        let mut end_state: i32 = -1;
        let mut end = 0;

        while state >= 0 {
            let Some(c) = self.next_char() else { break };

            iters += 1;

            old_state = state;
            state = self.next_state(c, state);

            if state >= 0 && self.token_for_state(state).is_some() {
                end_state = state;
                end = self.pos;
            }
        }

        if newchar.is_none() && iters == 0 {
            self.rewind(start);
            return None;
        }

        if end_state < 0 || end_state != state && self.token_for_state(old_state) == Some(-2) {
            return Some(Err(AnalysisError::lexical(
                SCANNER_ERRORS[old_state as usize].into(),
                start,
            )));
        }

        self.rewind(end);

        let mut token = self.token_for_state(end_state).expect("valid token");

        if token == 0 {
            return self.next_token();
        } else {
            let lexeme = self.substr_input(start, end);
            if TOKEN_DEPENDENCY || CASE_INSENSITIVITY {
                token = self.lookup_token(token, lexeme.into());
            }
            return Some(Ok(Token::new(
                FromPrimitive::from_i32(token).expect("valid token"),
                lexeme.into(),
                start,
            )));
        };
    }

    fn next_state(&self, c: u8, state: i32) -> i32 {
${options.scannerTable == Options.SCANNER_TABLE_HARDCODE ?
`${this.nextStateImpl(fa, options)}`
    :
`        SCANNER_TABLE[state as usize][c as usize]
`
}    }
    fn token_for_state(&self, state: i32) -> Option<i32> {
        if (state >= 0) && ((state as usize) < STATES_COUNT) {
            Some(TOKEN_STATE[state as usize])
        } else {
            None
        }
    }
    fn lookup_token(&self, base: i32, mut key: String) -> i32 {
${(options.scannerCaseSensitive == false) || (fa.specialCases.length > 0) ?
`        let mut start = SPECIAL_CASES_INDEXES[base as usize];
        let mut end = SPECIAL_CASES_INDEXES[base as usize + 1] - 1;

        if CASE_INSENSITIVITY {
            key.make_ascii_uppercase();
        };

        let mut half;
        let mut current;
        while start <= end {
            half = (start + end) / 2;
            current = SPECIAL_CASES_KEYS[half as usize];
            let o = current.cmp(key.as_str());

            if o.is_eq() {
                return FromPrimitive::from_i32(SPECIAL_CASES_VALUES[half as usize])
                    .expect("valid token");
            } else if o.is_lt() {
                start = half + 1;
            } else {
                end = half - 1;
            }
        }
        return base;
`
	:
`        unimplemented!()
`
}    }

    fn rewind(&mut self, pos: usize) {
        self.pos = pos;
${stringmd ? "" :
`        self.input.seek(SeekFrom::Start(pos as u64));
        self.shadow.truncate(pos);
`}    }
    fn substr_input(&self, start: usize, end: usize) -> &str {
${stringmd ?
`        self.input.split_at(start).1.split_at(end - start).0
`		:
`        self.shadow.split_at(start).1.split_at(end - start).0
`}    }
    fn next_char(&mut self) -> Option<u8> {
${stringmd ?
`        if self.pos < self.input.len() {
            let c = *self.input.as_bytes().get(self.pos).expect("ascii string");
            self.pos += 1;
            Some(c)
        } else {
            None
        }
`
		:
`        let mut buf: [u8; 1] = [0u8];
        if let Err(_) = self.input.read_exact(&mut buf) {
            return None;
        } else {
            self.shadow.push(buf[0] as char);
            self.pos += 1;
            Some(buf[0])
        }
`}    }
}

`;

		return result;
	}

	private nextStateImpl(fa: FiniteAutomata, opt: Options): string
	{
        const trans: List<Map<string, number>>  = fa.transitions;
        let casesState = "";
        for (let i=0; i<trans.size(); i++)
        {
            const m = trans.get(i);
            if (m.size == 0)
                continue;

            casesState +=
                "\t\t\t"+i+" => match c {\n";

            for (const [key, value] of m.entries())
            {
                const ch = key;
                const it = value;
                casesState += `\t\t\t\t${ch.charCodeAt(0)} => ${it},\n`;
            }

            casesState += "\t\t\t\t _ => -1,\n\t\t\t},\n";
        }

        return "\t\tmatch state {\n"+
            casesState.toString()+
            "\t\t\t_ => -1,\n\t\t}\n";
    }
}
