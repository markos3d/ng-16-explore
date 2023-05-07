import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent {

  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log('counter', this.doubleCounter()))
  }

  increment() {
    this.counter.update((oldCounter) => oldCounter + 1);
    // this.counter.set(this.counter() + 5); // could also be updated with set
    this.actions.mutate(actions => actions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update(old => [...old, 'DECREMENT'])
  }
}
