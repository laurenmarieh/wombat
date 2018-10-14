export class UserModel {
    userName: string;
    email: string;
    location: string;
    about: string;
    whatsAppID: string;
    originCountry: string;
    photo: string;

    constructor(appData?: any) {
        if (appData) {
            this.userName = appData.username;
            this.email = appData.email;
            this.location = appData.location;
            this.about = appData.about;
            this.whatsAppID = appData.whatsAppID;
            this.originCountry = appData.originCountry;
            this.photo = appData.photo;
        }
    }
}