export class Experience {
    title: string;
    author: string;
    text: string;
    rating: number;
    tags: string[];
    location: string;

    constructor(appData?: any){
        if(appData){
            this.title = appData.title;
            this.author = appData.author;
            this.text = appData.text;
            this.rating = appData.rating;
            this.tags = appData.tags;
            this.location = appData.location;
        };
    }
}