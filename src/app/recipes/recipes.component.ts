import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFoodRecipesService } from '../get-food-recipes.service';
import { NavbarService } from '../navbar-search.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  foodRecipes: any[] = [];
  foodType: String;
  error: string;
  gridRecipes: boolean = true;
  listRecipes: boolean = false;

  constructor(private _NavbarService: NavbarService, private _GetFoodRecipesService: GetFoodRecipesService, private _ActivatedRoute: ActivatedRoute, private router: Router) {
    this.foodType = this._ActivatedRoute.snapshot.params.recipe
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this._NavbarService.show();



  }
  recipesGrid() {
    this.gridRecipes = true
    this.listRecipes = false
  }
  recipesList() {
    this.gridRecipes = false
    this.listRecipes = true
  }


}
