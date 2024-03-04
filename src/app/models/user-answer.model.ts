export class UserAnswer {
    questionId: string;
    questionNumber: number;
    selectedAnswer: number;
    property: string;

    constructor (obj?: any) {
        this.questionId = obj && obj.questionId || "";
        this.questionNumber = obj && obj.questionNumber || -1;
        this.selectedAnswer = obj && obj.selectedAnswer || -1;
        this.property = obj && obj.property || "";
    }
}