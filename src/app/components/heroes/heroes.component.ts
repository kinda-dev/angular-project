import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

import { HEROOBJ } from 'src/app/interfaces/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HEROOBJ[] = [];
  showPrev: boolean = false;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((payload) => {
      this.heroes = payload.data.results;
    });
  }

  getOtherHeroes(action: string): void {
    let elementsToGet: number = 50;

    if (action === 'Prev') {
      elementsToGet = -50;
    } 

    this.heroService.getHeroes(elementsToGet).subscribe((payload) => {
      this.heroes = payload.data.results;
      if (payload.data.offset > 0) {
        this.showPrev = true;
      } else {
        this.showPrev = false;
      }
    });
  }

}
