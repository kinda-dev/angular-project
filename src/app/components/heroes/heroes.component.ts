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
  heroes$: Observable<any> = this.heroService.heroes$
  // .pipe(
  //   tap(data => console.log('what this', data))
  // );

  

  
  constructor(
    private heroService: HeroService,
    private _store: Store<IAppState>
    ) {}

  ngOnInit(): void {
    this._store.dispatch(new GetHeroes());
    this.isFetching = false;
  }

  testFunc(): void {
    this.heroService.getHeroes2();
  }

}
