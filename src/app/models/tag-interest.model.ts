export class TagInterestModel{
    public tagName:string;
    public interestAmount:number;

    constructor(tagName:string, interestAmount:number){
        this.tagName = tagName;
        this.interestAmount = interestAmount
    }
}