export class Article{
    title: string;
    link: string;
    votes: number;
    constructor(title:string,link:string,votes?:number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp():void{
        this.votes ++;
    }
    
    voteDown():void{
      this.votes --;
    }
}