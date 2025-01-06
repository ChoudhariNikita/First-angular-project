import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue=signal<number>(0);
  increment() {
    // this.counterValue.set(this.counterValue() + 1);  OR
    this.counterValue.update((val) => val + 1);
  }
  decrement() {
    // this.counterValue.set(this.counterValue() - 1); OR
    this.counterValue.update((val) => val - 1);
  }
  reset() {
    this.counterValue.set(0);
  }

}
