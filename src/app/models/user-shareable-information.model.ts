import { TagInterestModel } from "./tag-interest.model";
import { VideoModel } from "./video.model";

export class UserShareableInformationModel{
    public name:string;
    public email:string;
    public interestPerTag:TagInterestModel[]
    public userVideoHistory:VideoModel[]

    constructor(name:string, email:string, interestPerTag:TagInterestModel[], userVideoHistory:VideoModel[]){
        this.name = name;
        this.email = email;
        this.interestPerTag = interestPerTag;
        this.userVideoHistory = userVideoHistory;
    }
}