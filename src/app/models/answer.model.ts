export class Answer {
    score: number;
    text: string;

    constructor (obj?: any) {
        this.score = obj && obj.score || 0;
        this.text = obj && obj.text || "";
    }
}