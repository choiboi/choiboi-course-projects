import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

// Used `ng g d better-highlight` to create this directive.
@Directive({
  selector: '[appBetterHighlight]'
})
// This is better than basic-highlight because basic-highlight only assumes
// it will run on the browser where the DOM is rendered. This way allows styling
// (in this case) to be applied even when DOM is not accessible (ie. SSR).
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'grey';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
