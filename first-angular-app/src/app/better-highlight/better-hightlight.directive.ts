import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

// Used `ng g d better-highlight` to create this directive.
@Directive({
  selector: '[appBetterHightlight]'
})
// This is better than basic-highlight because basic-highlight only assumes
// it will run on the browser where the DOM is rendered. This way allows styling
// (in this case) to be applied even when DOM is not accessible (ie. SSR).
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
}
