import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarService } from '../navbar-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild("navBTn") navBtn: ElementRef;
  constructor(public _NavbarService: NavbarService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    console.log(this.navBtn);

  }

}
