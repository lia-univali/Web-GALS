export class HTMLDialog {

	public static translateString(str: string): string
	{
		let result = "";
		for (let i=0; i<str.length; i++)
		{
			let c = str.charAt(i);
			switch (c)
			{
				case '"':
					result += "&quot;";
					break;
				case '&':
					result += "&amp;";
					break;
				case '<':
					result += "&lt;";
					break;
				case '>':
					result += "&gt;";
					break;
				default:
					result += c;
			}
		}
			
		return result;
	}

}