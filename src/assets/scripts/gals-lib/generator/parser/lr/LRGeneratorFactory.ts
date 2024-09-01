import { Options } from "../../Options";
import { Grammar } from "../Grammar";
import { LRGenerator } from "./LRGenerator";
import { SLRGenerator } from "./SLRGenerator";
import { LRCanonicGenerator } from './../lr/LRCanonicGenerator'
import { LALRGenerator } from './../lr/LALRGenerator'
/**
 * @author Gesser
 */
export class LRGeneratorFactory
{
	private LRGeneratorFactory() {}
	
	
	public static createGenerator(g: Grammar, lrParserOption: number): LRGenerator | null
	{
		switch (lrParserOption)
		{
			case Options.PARSER_SLR: return new SLRGenerator(g);
			case Options.PARSER_LR: return new LRCanonicGenerator(g);
			case Options.PARSER_LALR : return new LALRGenerator(g);
			default: return null;
		}
	}
}
