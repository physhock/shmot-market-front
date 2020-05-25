import { AbstractModel } from '../abstract-model';
import { Item } from './item';
import { Buyer } from '../actors/buyer';

export class Order extends AbstractModel{
    constructor(public item: Item, public trackingId: string, public buyer: Buyer, public id?: number){
        super(id);
    }
    
}
