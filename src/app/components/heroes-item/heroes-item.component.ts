import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-item',
  templateUrl: './heroes-item.component.html',
  styleUrls: ['./heroes-item.component.css']
})
export class HeroesItemComponent implements OnInit {
  @Input() hero: any
  
  imgSrc: string = "";

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `${this.hero.thumbnail.path}/standard_medium.${this.hero.thumbnail.extension}`;
  }

}
