import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  showPrev: boolean = false;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((payload) => {
      this.heroes = payload.data.results;
      console.log("offset", payload.data.offset, "count", payload.data.count)

    });
  }

  getNextHeroes(): void {
    console.log("CLICKED")
    this.heroService.getHeroes(50).subscribe((payload) => {
      this.heroes = payload.data.results;
      if (payload.data.offset) this.showPrev = true;
      console.log("offset", payload.data.offset, "count", payload.data.count)
    });
  }

  getPreviousHeroes(): void {
    console.log("CLICKED")
    this.heroService.getHeroes(-50).subscribe((payload) => {
      this.heroes = payload.data.results;
      if (!payload.data.offset) this.showPrev = false;

      console.log("offset", payload.data.offset, "count", payload.data.count)

    });
  }
}
