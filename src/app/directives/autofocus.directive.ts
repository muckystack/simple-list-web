import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  @Input() public appAutofocus: string = '';

  constructor(private el: ElementRef) { }

  public ngAfterContentInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 500);
  }

}
