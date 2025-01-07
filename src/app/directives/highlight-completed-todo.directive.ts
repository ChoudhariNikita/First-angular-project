import { Directive,input,effect, ElementRef,inject } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {

  isCompleted=input(false);
  element=inject(ElementRef);
  constructor() { }

  stylesEffect=effect(()=>{
    if(this.isCompleted()){
      this.element.nativeElement.style.textDecoration='line-through';
      this.element.nativeElement.style.color='gray';
      this.element.nativeElement.style.backgroundColor='lightblue';
    }
  });

}
