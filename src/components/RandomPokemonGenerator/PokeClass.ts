export class PokeClass {
    imgUrl: string;
    imgLoaded: boolean;
    pokemoName: string;
    qualified: boolean;

    constructor(imgUrl: string, imgLoaded: boolean, pokemoName: string, qualified: boolean) {
        this.imgUrl = imgUrl;
        this.imgLoaded = imgLoaded;
        this.pokemoName = pokemoName;
        this.qualified = qualified;
    }
}