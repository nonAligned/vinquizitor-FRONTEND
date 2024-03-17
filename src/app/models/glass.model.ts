export class Glass {
    _id: string;
    type: string;
    description: string;
    icon: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.type = obj && obj.type || "";
        this.description = obj && obj.description || "";
        this.icon = obj && obj.icon || "";
    }
}