export class Story {
    title: string;
    author: string;
    text: string;
    likes: number;
    tags: string[];

    constructor(appData?: any) {
        if (appData) {
            this.title = appData.title;
            this.author = appData.author;
            this.text = appData.text;
            this.likes = appData.rating;
            this.tags = appData.tags;
        }
    }
}
