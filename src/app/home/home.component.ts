import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetFoodRecipesService } from '../get-food-recipes.service';
import { NavbarService } from '../navbar-search.service';

NavbarService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('searchBox') searchBox: ElementRef;
  @ViewChild('searchBtn') searchBtn: ElementRef;

  constructor(private _NavbarService: NavbarService, public _GetFoodRecipesService: GetFoodRecipesService, private _Router: Router) { }

  ngOnInit(): void { this._NavbarService.hide() }
  ngAfterViewInit() {
  }
  getFoodType() {
    this._GetFoodRecipesService.getFoodRecipesType(this.searchBox.nativeElement.value);
    this._Router.navigateByUrl('/recipes');

    this.searchBox.nativeElement.value = ""
  }
  features: any[] = [
    {
      icon: "fas fa-hourglass-half",
      feature: "Quick"
    },
    {
      icon: "fas fa-mitten",
      feature: "Easy"
    },
    {
      icon: "fab fa-creative-commons-nc",
      feature: "Cheap"
    },
    {
      icon: "fas fa-heart",
      feature: "Healthy"
    },
  ]


}
