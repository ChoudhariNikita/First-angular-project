import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../component/greeting/greeting.component';
import { CounterComponent } from '../component/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage=signal('Hello World');
  keyUpHandler(event:KeyboardEvent) {
   console.log(`User typed: ${event.key}`);
  }
}
