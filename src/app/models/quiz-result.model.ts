import { Wine } from "./wine.model";

export class QuizResult {
    variety: Wine;
    type: string;
    matchPercentage: number;

    constructor (obj?: any) {
        this.variety = obj && new Wine(obj.variety) || new Wine();
        this.type = obj && obj.type || "";
        this.matchPercentage = obj && obj.matchPercentage || -1;
    }
}