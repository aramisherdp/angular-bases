import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "peter";
  public age: number = 28;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
  getHeroDescription():string {
    return `${ this.name} - ${this.age}`
  }
  public changeHero():void{
    this.name = 'Stark'
  }
  public changeAge():void{
    this.age = 45
  }
  public reset():void{
    this.name = 'peter'
    this.age = 28
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    })
  }
}
