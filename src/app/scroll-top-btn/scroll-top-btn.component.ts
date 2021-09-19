import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  styleUrls: ['./scroll-top-btn.component.scss']
})
export class ScrollTopBtnComponent implements OnInit, AfterViewInit {
  @ViewChild("scrollToTopBtn") scrollToTopBtn: ElementRef
  @HostListener("window:scroll")
  ScrollBtnShowAndHide() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 1000) {
      this._renderer.setStyle(this.scrollToTopBtn.nativeElement, 'opacity', '0.7');
    } else {
      this._renderer.setStyle(this.scrollToTopBtn.nativeElement, 'opacity', '0');
    }
  }
  constructor(private _renderer: Renderer2) { }

  ngOnInit(): void { }
  ngAfterViewInit() { }

  scrollToTop() {
    window.scroll(0, 0)
  }

}
