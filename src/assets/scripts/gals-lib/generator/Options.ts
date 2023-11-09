export class Options
{
	public scannerName: string  = "Lexico";
	public parserName: string   = "Sintatico";
	public semanticName: string = "Semantico";
	public pkgName: string      = "";
	
	public generateScanner: boolean = true;
	public generateParser: boolean  = true;
	
	public static readonly LANG_JAVA: number   = 0;
	public static readonly LANG_CPP: number    = 1;
	public static readonly LANG_DELPHI: number = 2;
	
	public language: number = Options.LANG_JAVA;
	
	public static readonly PARSER_LR: number   = 0;
	public static readonly PARSER_LALR: number = 1;
	public static readonly PARSER_SLR: number  = 2;
	public static readonly PARSER_LL: number   = 3;
	public static readonly PARSER_REC_DESC: number = 4;
	
	public parser: number = Options.PARSER_SLR;
	
	public scannerCaseSensitive: boolean = true;
	
	public static readonly SCANNER_TABLE_FULL: number = 0;
	public static readonly SCANNER_TABLE_COMPACT: number = 1;
	public static readonly SCANNER_TABLE_HARDCODE: number = 2;

	public scannerTable: number = Options.SCANNER_TABLE_FULL;

	
	public static readonly INPUT_STRING: number = 0;
	public static readonly INPUT_STREAM: number = 1;

	public input: number = Options.INPUT_STRING;
	
	public toString(): string
	{
		let bfr = '';
		
		bfr +=  ("GenerateScanner = "    + this.generateScanner + "\n");
		bfr +=  ("GenerateParser = "     + this.generateParser);
		
		bfr +=  ("Language = ");
		switch (this.language)
		{
			case Options.LANG_CPP:		bfr +=  ("C++" + "\n"); break;
			case Options.LANG_JAVA:	    bfr +=  ("Java" + "\n"); break;
			case Options.LANG_DELPHI:	bfr +=  ("Delphi" + "\n"); break;
		}
		
		bfr +=  ("ScannerName = " + this.scannerName + "\n");
		if (this.generateParser)
		{
			bfr +=  ("ParserName = "     + this.parserName + "\n");
			bfr +=  ("SemanticName = "   + this.semanticName + "\n");
		}
		if (this.pkgName.length > 0)
			bfr +=  ("Package = " + this.pkgName + "\n");
		if (this.generateScanner)
		{
			bfr +=  ("ScannerCaseSensitive = " + this.scannerCaseSensitive + "\n");
			
            bfr +=  ("ScannerTable = ");
			switch (this.scannerTable)
			{
				case Options.SCANNER_TABLE_FULL:		bfr +=  ("Full" + "\n"); break;
				case Options.SCANNER_TABLE_COMPACT:	    bfr +=  ("Compact" + "\n"); break;
				case Options.SCANNER_TABLE_HARDCODE:	bfr +=  ("Hardcode" + "\n"); break;
			}
			
            bfr +=  ("Input = ");
			switch (this.input)
			{
				case Options.INPUT_STREAM:	bfr +=  ("Stream" + "\n"); break;
				case Options.INPUT_STRING:	bfr +=  ("String" + "\n"); break;
			}
		}
		if (this.generateParser)
		{
            bfr +=  ("Parser = ");
			switch (this.parser)
			{
				case Options.PARSER_LR:	        bfr +=  ("LR"); break;
				case Options.PARSER_LALR:	    bfr +=  ("LALR"); break;
				case Options.PARSER_SLR:	    bfr +=  ("SLR"); break;
				case Options.PARSER_LL:	        bfr +=  ("LL"); break;
				case Options.PARSER_REC_DESC:	bfr +=  ("RD"); break;
			}
		}		
		return bfr;
	}

    // TODO Escrever conversor de opções
	// public static fromString(str: string): Options
	// {
	// 	let o = new Options();
		
	// 	LineNumberReader in = new LineNumberReader(new StringReader(str));
	// 	String line = null;
	// 	try
	// 	{
	// 		while ( (line = in.readLine()) != null)
	// 		{   
	// 			StringTokenizer tknzr = new StringTokenizer(line);
				
    //             if (! tknzr.hasMoreTokens())
    //                 continue;
                
	// 			String name = tknzr.nextToken();
	// 			if (!tknzr.hasMoreTokens())
	// 				throw new XMLParsingException("Erro processando arquivo");
	// 			tknzr.nextToken();//=
	// 			String value = "";
	// 			if (tknzr.hasMoreTokens())
	// 				value = tknzr.nextToken();
				
	// 			o.setOption(name, value);
	// 		}
	// 	}
	// 	catch (IOException e)
	// 	{
	// 		throw new XMLParsingException("Erro processando arquivo");
	// 	}
		
	// 	return o;
	// }

	/**
	 * @param name
	 * @param value
	 */
	private setOption(name: string, value: string)
	{
		if (name.toUpperCase() === ("GenerateScanner").toUpperCase())
			this.generateScanner = Boolean(value);
		else if (name.toUpperCase() === ("GenerateParser").toUpperCase())
			this.generateParser = Boolean(value);
		else if (name.toUpperCase() === ("Language").toUpperCase())
		{
			if (value.toUpperCase() === ("C++").toUpperCase())
				this.language = Options.LANG_CPP;
			else if (value.toUpperCase() === ("Java").toUpperCase())
				this.language = Options.LANG_JAVA;
			else if (value.toUpperCase() === ("Delphi").toUpperCase())
				this.language = Options.LANG_DELPHI;
			else
				throw new Error("Erro processando arquivo");
		}
		else if (name.toUpperCase() === ("ScannerName").toUpperCase())
			this.scannerName = value;
		else if (name.toUpperCase() === ("ParserName").toUpperCase())
            this.parserName = value;
		else if (name.toUpperCase() === ("SemanticName").toUpperCase())
            this.semanticName = value;
		else if (name.toUpperCase() === ("Package").toUpperCase())
            this.pkgName = value;
		else if (name.toUpperCase() === ("ScannerCaseSensitive").toUpperCase())
            this.scannerCaseSensitive = Boolean(value);
		else if (name.toUpperCase() == ("ScannerTable").toUpperCase())
		{
			if (value.toUpperCase() === ("Full").toUpperCase())
                this.scannerTable = Options.SCANNER_TABLE_FULL;
			else if (value.toUpperCase() === ("Compact").toUpperCase())
                this.scannerTable = Options.SCANNER_TABLE_COMPACT;
			else if (value.toUpperCase() === ("Hardcode").toUpperCase())
                this.scannerTable = Options.SCANNER_TABLE_HARDCODE;
			else
				throw new Error("Erro processando arquivo");
		}
		else if (name.toUpperCase() === ("Input").toUpperCase())
		{
			if (value.toUpperCase() === ("Stream").toUpperCase())
				this.input = Options.INPUT_STREAM;
			else if (value.toUpperCase() === ("String").toUpperCase())
                this.input = Options.INPUT_STREAM;
			else
				throw new Error("Erro processando arquivo");
		}
		else if (name.toUpperCase() === ("Parser").toUpperCase())
		{
			if (value.toUpperCase() === ("LR").toUpperCase())
                this.parser = Options.PARSER_LR;
			else if (value.toUpperCase() === ("LALR").toUpperCase())
                this.parser = Options.PARSER_LALR;
			else if (value.toUpperCase() === ("SLR").toUpperCase())
                this.parser = Options.PARSER_SLR;
			else if (value.toUpperCase() === ("LL").toUpperCase())
                this.parser = Options.PARSER_LL;
			else if (value.toUpperCase() === ("RD").toUpperCase())
                this.parser = Options.PARSER_REC_DESC;
			else
				throw new Error("Erro processando arquivo");
		}
		else
			throw new Error("Erro processando arquivo");						
	}	
}
