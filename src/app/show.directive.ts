import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShow]',
})
export class ShowDirective {
  @Input() set appShow(condition: boolean) {
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(
    private tplRef: TemplateRef<any>,
    private vwRef: ViewContainerRef
  ) {}
}
