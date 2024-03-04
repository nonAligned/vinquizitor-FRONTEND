import { QuizResult } from "./quiz-result.model";

export class QuizResults {
    results: QuizResult[];

    constructor (obj?: any) {
        this.results = obj && obj.results.map((elem: any) => new QuizResult(elem)) || [];
    }
}