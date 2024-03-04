import { Wine } from "./wine.model";

export class QuizResult {
    varietyName: string;
    varietyId: string;
    type: string;
    matchPercentage: number;

    constructor (obj?: any) {
        this.varietyName = obj && obj.varietyName || "";
        this.varietyId = obj && obj.varietyId || "";
        this.type = obj && obj.type || "";
        this.matchPercentage = obj && obj.matchPercentage || -1;
    }
}