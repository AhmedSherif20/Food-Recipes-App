import { Component, OnInit } from '@angular/core';
import { GetFoodRecipesService } from '../get-food-recipes.service';
import { NavbarService } from '../navbar-search.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  foodRecipes: any[] = [];
  constructor(private _NavbarService: NavbarService, private _GetFoodRecipesService: GetFoodRecipesService) { }

  ngOnInit(): void {
    this._NavbarService.show();
    this._GetFoodRecipesService.getFoodRecipes().subscribe((e) => {
      this.foodRecipes = e.recipes
    })
  }

}
