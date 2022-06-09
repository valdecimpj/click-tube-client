export class VideoModel{
    public id:number;
    public tags:string[];
    public name:string;
    public views:number;

    constructor(id:number, tags:string[], name:string, views:number){
        this.id = id;
        this.tags = tags;
        this.name = name;
        this.views = views;
    }
}