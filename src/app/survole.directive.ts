import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSurvole]',
})
export class SurvoleDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-family', 'fantasy');
  }

  @HostListener('mouseleave') mouseLeavEvent(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'font-family',
      'sans-serif'
    );
  }
}
