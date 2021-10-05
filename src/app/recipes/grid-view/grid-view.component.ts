import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFoodRecipesService } from 'src/app/get-food-recipes.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  foodType: String;
  foodRecipes: any[] = [];
  error: string;

  constructor(private _GetFoodRecipesService: GetFoodRecipesService, private _ActivatedRoute: ActivatedRoute, private router: Router) {
    this.foodType = this._ActivatedRoute.snapshot.params.recipe
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this._GetFoodRecipesService.getFoodRecipes(this.foodType).subscribe(
      (e) => { this.foodRecipes = e.recipes },
      (e) => {
        this.error = e.error.error;
        console.log(e);
      })
  }

}
