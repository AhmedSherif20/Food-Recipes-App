import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewInit {

  @ViewChild("goRegister") goRegisterBtn: ElementRef;
  @ViewChild("goLogin") goLogin: ElementRef;
  @ViewChild("formLayout") formLayout: ElementRef;


  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.formLayout.nativeElement.classList);

  }
}
