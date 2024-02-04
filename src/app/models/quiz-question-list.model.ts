import { QuizQuestion } from "./quiz-question.model";

export class QuizQuestionList {

    results: QuizQuestion[];
    questionsReturned: number;

    constructor(obj?:any) {
        this.results = obj && obj.results.map((quizQuestion: any) => new QuizQuestion(quizQuestion)) || [];
        this.questionsReturned = obj && obj.questionsReturned || 0;
    }
}