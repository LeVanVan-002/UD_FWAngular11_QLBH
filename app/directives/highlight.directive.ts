import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('listColor') defaultColorOver: string = "";


  constructor(private el: ElementRef) {
    setTimeout(() =>{
      this.el.nativeElement.style.backgroundColor = "";
    },1000);
   }

   @HostListener('mouseover') mouseOver() {
     this.el.nativeElement.style.backgroundColor = this.defaultColorOver;
   }

   @HostListener('mouseout') mouseOut() {
     this.el.nativeElement.style.backgroundColor = "";
   }
}
