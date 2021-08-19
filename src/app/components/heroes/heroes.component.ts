import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/store/state/app.state';
import { GetHeroes } from 'src/app/store/actions/heroes.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  showPrev: boolean = false;
  isFetching: boolean = true;
  heroes$: Observable<any> = this.heroService.heroes$
  // .pipe(
  //   tap(data => console.log('what this', data))
  // );

  offset$: Observable<any> = this.heroService.offset$
  pageNumber: Number = 1;



  constructor(
    private heroService: HeroService,
    private _store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetHeroes());
    console.log('STORE', this._store)
    this.isFetching = false;
    console.log('Offset from heroes component', this.offset$)
  }

  testFunc(): void {
    this.heroService.getHeroes2();
  }

}
