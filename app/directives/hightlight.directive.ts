import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @Input('color') colorDefault: string = 'red';
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.background='#000';
    this.el.nativeElement.style.color = 'yellow';
  }
  @HostListener('mouseover') mouseOver() {
    this.el.nativeElement.style.color = 'cyan';
  }
  @HostListener('mouseout') mouseOut() {
    this.el.nativeElement.style.color = this.colorDefault;
  }
}
