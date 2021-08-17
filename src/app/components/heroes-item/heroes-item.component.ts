import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-item',
  templateUrl: './heroes-item.component.html',
  styleUrls: ['./heroes-item.component.css']
})
export class HeroesItemComponent implements OnInit {
  @Input() hero: any
  
  imgSrc: string = "";
  heroDescription: string = "";
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('HEROOOOO',this.hero)
    this.imgSrc = `${this.hero.thumbnail.path}/standard_medium.${this.hero.thumbnail.extension}`;
    if (this.hero.description !== "") {
      this.heroDescription = this.hero.description;
    } else {
      this.heroDescription = `Sorry, our database doesn't have a description for ${this.hero.name}`;
    }
  }

  showDescription(): void {
    this.show = !this.show;
  }

}
