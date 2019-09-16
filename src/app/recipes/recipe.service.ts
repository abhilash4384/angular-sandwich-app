import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  
    // recipeSelected = new EventEmitter<Recipe>();

    //recipeSelected = new Subject<Recipe>();

    
    constructor(private shoppingService: ShoppingService) {
        
    }
  
    private recipes: Recipe[] = [
    new Recipe(
        'A test recipe',
         'Test Description',
          'https://mayakitchenette.com/wp-content/uploads/2014/06/tandoori-chicken-recipe.jpg',
          [
              new Ingrediant('Chicken', 80),
              new Ingrediant('Coke', 70)
          ]
          )
  ]; 

  getRecipes() {
      return this.recipes.slice();
  }


  getRecipe(index: number) {

    return this.recipes[index];
  }

  addIngradiantsToShoppingList(ingradiants: Ingrediant[]) {
    this.shoppingService.addIngradiants(ingradiants);
  }
}