import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test recipe description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/800px-Foods_%28cropped%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
