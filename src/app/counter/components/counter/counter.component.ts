import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3> Counters: {{ counter }}</h3>
  <button (click)="increaseBy(2)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-2)" >-1</button>
  `
})
export class CounterComponent{
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number){
    this.counter += value;
  }

  reset(): void{
    this.counter = 10;
  }
}
