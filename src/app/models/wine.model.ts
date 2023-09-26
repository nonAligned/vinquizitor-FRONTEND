export class Wine {
    _id: string;
    name: string;
    alt_names: string[];
    description: string;
    body: number;
    alcohol: number;
    sweetness: number;
    tannin: number;
    acidity: number;
    regional_varieties_ids: string[];
    food_pairing: string;
    serving_temperature_min: number;
    serving_temperature_max: number;
    price_range: number;
    photo: string;
    decant: boolean;
    flavors: string[];
    glass_serving: string;
    cellar_storage: string;
    rarity: string;
    area: number;
    top_producers: string[];
    styles: string[];

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || "";
        this.alt_names = obj && obj.alt_names || [];
        this.description = obj && obj.description || "";
        this.body = obj && obj.body || 0;
        this.alcohol = obj && obj.alcohol || 0;
        this.sweetness = obj && obj.sweetness || 0;
        this.tannin = obj && obj.tannin || 0;
        this.acidity = obj && obj.acidity || 0;
        this.regional_varieties_ids = obj && obj.regional_varieties_ids || [];
        this.food_pairing = obj && obj.food_pairing || "";
        this.serving_temperature_min = obj && obj.serving_temperature_min || 0;
        this.serving_temperature_max = obj && obj.serving_temperature_max || 0;
        this.price_range = obj && obj.price_range || 0;
        this.photo = obj && obj.photo || "";
        this.decant = obj && obj.decant || false;
        this.flavors = obj && obj.flavors || [];
        this.glass_serving = obj && obj.glass_serving || "";
        this.cellar_storage = obj && obj.cellar_storage || "";
        this.rarity = obj && obj.rarity || "";
        this.area = obj && obj.area || 0;
        this.top_producers = obj && obj.top_producers || [];
        this.styles = obj && obj.styles || [];
    }
}