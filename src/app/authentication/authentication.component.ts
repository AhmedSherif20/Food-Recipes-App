import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../navbar-search.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewInit {

  @ViewChild("goRegister") goRegisterBtn: ElementRef;
  @ViewChild("goLogin") goLoginBtn: ElementRef;
  @ViewChild("formLayout") formLayout: ElementRef;
  @ViewChild("goRegisterDiv") goRegisterDiv: ElementRef;
  @ViewChild("goLoginDiv") goLoginDiv: ElementRef;
  constructor(private renderer: Renderer2, private _NavbarService: NavbarService) { }

  ngOnInit(): void {
    this._NavbarService.show()
  }
  ngAfterViewInit(): void { }

  goRegisterForm() {
    this.formLayout.nativeElement.classList.add("right")
    this.goRegisterDiv.nativeElement.style.display = "none"
    this.goLoginDiv.nativeElement.style.display = "block"
  }
  goLoginForm() {
    this.formLayout.nativeElement.classList.remove("right")
    this.goRegisterDiv.nativeElement.style.display = "block"
    this.goLoginDiv.nativeElement.style.display = "none"
  }
  // register form typescript code
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.pattern(".*[A-Z]"), Validators.required])
  })
  registerFormInfo(formInfo: FormGroup) {
    console.log(formInfo.value);
    this.registerForm.reset()
  }
  // login form typescript code
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
  loginFormInfo(formInfo: FormGroup) {
    console.log(formInfo);
    this.loginForm.reset()
  }


}
