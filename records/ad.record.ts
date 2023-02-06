import { ValidationError } from './../utils/errors';
import { AdEntity } from "../types";

interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string;
}

export class AdRecord implements AdEntity {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;
    
    constructor(obj: AdEntity) {
        if(!obj.name || obj.name.length < 3 || obj.name.length > 100) {
            throw new ValidationError('Name should be longer than 0 and less than 100');
        }

        if(!obj.description || obj.description.length === 0 || obj.description.length > 1024) {
            throw new ValidationError('Description should be longer than 0 and less than 1024');
        }        
        
        if(obj.price < 0 || obj.price > 999999) {
            throw new ValidationError('Price should be grater than 0 and less than 999999');
        }        

        //@TODO check valid URL
        if(!obj.url || obj.url.length > 300) {
            throw new ValidationError('Url should be grater than 0 and less than 300');
        }
        
        if (obj.lat > 90 || obj.lat < -90 || obj.lon > 180 || obj.lon < -180) {
            throw new ValidationError('Invalid coordinates');
        }

        this.id = obj.id;
        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;
    }
}