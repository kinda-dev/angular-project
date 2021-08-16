import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Store, select } from '@ngrx/store';

import { HEROOBJ } from 'src/app/interfaces/Hero';
import { IAppState } from 'src/app/store/state/app.state';
import { selectHeroesList } from 'src/app/store/selectors/hero.selector';
import { GetHeroes } from 'src/app/store/actions/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HEROOBJ[] = [];
  showPrev: boolean = false;
  isFetching: boolean = true;
  heroes$ = this._store.pipe(select(selectHeroesList));
  
  constructor(
    private heroService: HeroService,
    private store: Store<{heroes: HEROOBJ}>,
    // below is correct? 
    private _store: Store<IAppState>
    ) {}

  ngOnInit(): void {
    // below for the store
    this._store.dispatch(new GetHeroes());
    console.log('HEROES:', this.heroes$)
    // this.test = this.store.select('heroes')
    console.log('STORE', this.store.select('heroes'))
    this.heroService.getHeroes().subscribe((payload) => {
      this.isFetching = false;
      this.heroes = payload.data.results;
    });
  }

  getOtherHeroes(action: string): void {
    this.isFetching = true;
    let elementsToGet: number = 50;

    if (action === 'Prev') {
      elementsToGet = -50;
    } 

    this.heroService.getHeroes(elementsToGet).subscribe((payload) => {
      this.isFetching = false;
      this.heroes = payload.data.results;
      if (payload.data.offset > 0) {
        this.showPrev = true;
      } else {
        this.showPrev = false;
      }
    });
  }

  testFunc(): void {
    this.heroService.getHeroes2();
  }

}
