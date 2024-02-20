import { Wine } from "./wine.model";

export class QuizResults {
    results: Wine[];

    constructor (obj?: any) {
        this.results = obj && obj.results || [];
    }
}