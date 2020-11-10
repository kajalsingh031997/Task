import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private ref:ElementRef) { }

  ngOnInit(){
    this.ref.nativeElement.style.textTransform = 'uppercase';
  }

}
