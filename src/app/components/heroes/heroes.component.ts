import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  first = "Mauro";

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((payload) => {
      console.log('first', this.first)
      this.heroes = payload.data.results;
      this.first = payload.data.results[0].name;
      console.log('heroes',this.heroes)
    });
  }
  // this.heroes = payload.data.results
}
