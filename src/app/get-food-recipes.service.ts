import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFoodRecipesService {
  foodType: string;
  constructor(private _HttpClient: HttpClient) { }
  getFoodRecipesType(foodTypeValue: string) {
    return this.foodType = foodTypeValue
  }
  getFoodRecipes(): Observable<any> {
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=${this.foodType}`)
  }
}
