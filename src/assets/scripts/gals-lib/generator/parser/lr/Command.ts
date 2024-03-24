export class Command
{
	private parameter: number;
	private type: number;
	
	constructor(type: number, parameter: number)
	{
		this.type = type;
		this.parameter = parameter;
	}
	
	public static SHIFT  = 0;
	public static REDUCE = 1;
	public static ACTION = 2;
	public static ACCEPT = 3;
	public static GOTO   = 4;
	public static ERROR  = 5;
	
	public static CONSTANTS = 
	[
		"SHIFT ",
		"REDUCE",
		"ACTION",
		"ACCEPT",
		"GO_TO ",
		"ERROR "
	];
	
	public getType(): number
	{
		return this.type;
	}
	
	public getParameter(): number
	{
		return this.parameter;
	}
	
	public static createShift(state: number): Command
	{
		return new Command(Command.SHIFT, state);
	}
	
	public static createReduce(production: number): Command
	{
		return new Command(Command.REDUCE, production);
	}
	
	public static createAction(production: number): Command
	{
		return new Command(Command.ACTION, production);
	}
	
	public static createAccept(): Command
	{
		return new Command(Command.ACCEPT, 0);
	}
	
	public static createGoTo(state: number): Command
	{
		return new Command(Command.GOTO, state);
	}
	
	public static createError(): Command
	{
		return new Command(Command.ERROR, 0);
	}
	
	public toString(): string
	{
		switch (this.type)
		{
			case Command.SHIFT: return "SHIFT("+this.parameter+")";
			case Command.REDUCE: return "REDUCE("+this.parameter+")";
			case Command.ACTION: return "SEM.ACT("+this.parameter+")";
			case Command.ACCEPT: return "ACCEPT";
			case Command.GOTO: return ""+this.parameter;
			case Command.ERROR: return "-";
			default: return "???";
		}
	}
	
	public equals(obj: Object): boolean
	{
		try
		{
			let other: Command = obj as (Command);
			
            let result = this.type == other.type && this.parameter == other.parameter;

            if(result === undefined) return false

			return result;
		}
		catch (e)
		{
			return false;
		}
	}
	
	public hashCode(): number
	{
		let result = 43;
		result = result*this.parameter + 17;
		result = result*this.type + 17;
		return result;
	}
}
