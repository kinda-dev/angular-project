import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-body',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => heroes);
  }

}
