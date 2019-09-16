import { Ingrediant } from '../shared/ingrediant.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {
    private ingradiants = [new Ingrediant('Apple', 5), new Ingrediant('Bananan', 10)];
    // ingradiantsChanged = new EventEmitter<Ingrediant[]>();
    ingradiantsChanged = new Subject<Ingrediant[]>(); 
    
    getIngradiants() {
        return this.ingradiants.slice();
    }

    addIngradiant(ingrediant: Ingrediant){
        this.ingradiants.push(ingrediant);
        this.ingradiantsChanged.next(this.ingradiants.slice());
    }


     addIngradiants(ingrediants: Ingrediant[]){
        this.ingradiants.push(...ingrediants);
        this.ingradiantsChanged.next(this.ingradiants.slice());
    
    }
    
}