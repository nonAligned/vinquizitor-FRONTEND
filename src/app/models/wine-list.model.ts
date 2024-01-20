import { Wine } from "./wine.model";

export class WineList {
    results: Wine[];
    itemsFound: number;

    constructor (obj?: any) {
        this.results = obj && obj.results.map((elem: any) => new Wine(elem)) || [];
        this.itemsFound = obj && obj.itemsFound || 0;
    }
}