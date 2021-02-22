export class PokeClass {
    imgUrl: string;
    pokemoName: string;
    qualified: boolean;

    constructor(imgUrl: string, pokemoName: string, qualified: boolean) {
        this.imgUrl = imgUrl;
        this.pokemoName = pokemoName;
        this.qualified = qualified;
    }
}