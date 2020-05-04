import { AbstractModel } from '../abstract-model';

export class Item extends AbstractModel {
    constructor(public name: string, public size: string, id: number) {
        super(id);
    }
}
