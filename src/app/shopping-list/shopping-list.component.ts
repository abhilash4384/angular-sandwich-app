import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
 

  // ingradiants = [new Ingrediant('Apple', 5), new Ingrediant('Bananan', 10)];
  ingradiants: Ingrediant[];
  private idChangdSub: Subscription; 

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingradiants = this.shoppingService.getIngradiants();
    this.idChangdSub = this.shoppingService.ingradiantsChanged.subscribe((ingradiants: Ingrediant[]) => {
      this.ingradiants = ingradiants;
    })
  }

  // onIngradiantAdded(ingrediant: Ingrediant) {
  //   console.log(ingrediant);
  //   this.ingradiants.push(ingrediant);
  // }

  ngOnDestroy(): void {
   this.idChangdSub.unsubscribe();
  }

}
