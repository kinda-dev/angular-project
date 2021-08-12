import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((payload) => {
      this.heroes = payload.data.results;
    });
  }

  getNextHeroes() {
    console.log("CLICKED")
    this.heroService.getHeroes(25).subscribe((payload) => {
      this.heroes = payload.data.results;
    });
  }

  getPreviousHeroes() {
    console.log("CLICKED")
    this.heroService.getHeroes(-25).subscribe((payload) => {
      this.heroes = payload.data.results;
    });
  }
}
