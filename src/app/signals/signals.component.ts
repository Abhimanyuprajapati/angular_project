import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  isCounter= signal(0);
  // isCounter: WritableSignal<number> = signal(0);

  increment(){
    this.isCounter.set(this.isCounter()+1);
  }
}
