


export class AnalysisError extends Error{	
	
    private _position: number;

    constructor(message: string, position?: number) {
        super(message);

        if(position == undefined){
            this._position = -1;
        }
        else{
            this._position = position;
        }

        Object.setPrototypeOf(this, AnalysisError.prototype);
    }

    public get position() : number {
        return this._position;
    }
    
    public set position( position: number) {
        this._position = position;
    }
	
	public toString(): string{
		return this.message + ", em " + this._position;
	}
}