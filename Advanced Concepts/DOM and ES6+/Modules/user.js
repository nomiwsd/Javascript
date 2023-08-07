export default class User{
    constructor(email,name){
        this._id=email;
        this._name=name;
    }

    greetings(){
        return `hi My name is  ${this._name}`;
    }
}
