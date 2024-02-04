import { Answer } from "./answer.model";

export class QuizQuestion {
    _id: string;
    type: string;
    questionText: string;
    property: string;
    answers?: Answer[];

    constructor (obj?: any) {
        this._id = obj && obj._id || null;
        this.type = obj && obj.type || "";
        this.questionText = obj && obj.questionText || ""
        this.property = obj && obj.property || ""
        if (obj.answers) this.answers = obj && obj.answers.map((answer:any) => new Answer(answer)) || []
    }
}