import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetFoodRecipesService } from '../get-food-recipes.service';
import { NavbarService } from '../navbar-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild("navSearch") navSearch: ElementRef;
  @ViewChild("navBtn") navBtn: ElementRef;
  constructor(public _NavbarService: NavbarService, private _Router: Router, public _GetFoodRecipesService: GetFoodRecipesService) { }

  ngOnInit(): void { }

  ngAfterViewInit() { }

  getFoodType() {
    this._GetFoodRecipesService.getFoodRecipesType(this.navSearch.nativeElement.value);
    this._Router.navigateByUrl('/recipes');

    this.navSearch.nativeElement.value = ""
  }

}
