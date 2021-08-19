import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Store, select, State } from '@ngrx/store';

import { HEROOBJ, Result } from 'src/app/interfaces/Hero';
import { IAppState } from 'src/app/store/state/app.state';
import { selectHeroes } from 'src/app/store/selectors/hero.selector';
import { GetHeroes } from 'src/app/store/actions/heroes.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HEROOBJ[] = [];
  showPrev: boolean = false;
  isFetching: boolean = true;
  heroes$: Observable<any> = this.heroService.heroes$.pipe(
    tap(data => console.log(data))
  );

  
  testHeroes$ :HEROOBJ[] | any = []

  
  constructor(
    private heroService: HeroService,
    private store: Store<{heroes: HEROOBJ}>,
    // below is correct? 
    private _store: Store<IAppState>,
    private _state: State<IAppState>
    ) {}

  ngOnInit(): void {
    // below for the store
    this._store.dispatch(new GetHeroes());
    console.log('HEROES:', this.heroes$)
    console.log('STORE!!!!', this._store)
    console.log('state!!!!', this._state)
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
