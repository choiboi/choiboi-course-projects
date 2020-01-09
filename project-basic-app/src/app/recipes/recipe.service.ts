import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Soup',
      'A test recipe description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/800px-Foods_%28cropped%29.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Noodles', 1)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'A test recipe 2 description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/800px-Foods_%28cropped%29.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Lettice', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Beef Patty', 2)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // This return a new array of recipes (copy).
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
