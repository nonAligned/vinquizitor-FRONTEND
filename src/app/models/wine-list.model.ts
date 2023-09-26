import { Wine } from "./wine.model";

export class WineList {
    results: Wine[];

    constructor (obj?: any) {
        this.results = obj && obj.results.map((elem: any) => new Wine(elem)) || [];
    }
}