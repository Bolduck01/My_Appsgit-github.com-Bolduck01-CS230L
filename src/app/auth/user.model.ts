

export class User {
    public email:string;
    public id:string;
    private _token:string;
    private _tokenExpirationData:Date;
    
    public constructor(email:string, id:string, _token:string, _tokenExpirationDate:Date) 
    {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationData = _tokenExpirationDate;
    
    }

    get token() {
        
        if(!this._tokenExpirationData || new Date() > this._tokenExpirationData)
        {
            return null;
        }

        return this._token;
    }
}