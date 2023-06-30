export class Token{

    private _id: number; //int
    private _lexeme: string;
	private _position: number; //int

    constructor(_id:number, _lexeme:string, _position: number) {
        this._id = _id;
        this._lexeme = _lexeme;
        this._position = _position;

    }

    //Getter
    public get id(): number {
        return this._id;
    }

    public get lexeme(): string {
        return this._lexeme;
    }

    public get position(): number {
        return this._position;
    }

    public toString(): string {
        return this._id+"("+this._lexeme +")";
    }

}