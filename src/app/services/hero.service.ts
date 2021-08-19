import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {Md5} from 'ts-md5/dist/md5';
import { config } from '../../config';
// below import to dipatch action from the store
import { select, Store } from '@ngrx/store';
import { GetHeroes } from '../store/actions/heroes.actions';
import { IAppState } from '../store/state/app.state';
import { selectHeroes } from '../store/selectors/hero.selector';

@Injectable({
  providedIn: 'root'
})


export class HeroService {


  heroes$: Observable<any> = this._store.pipe(
      select(selectHeroes)
  );



  
  private md5 = new Md5();
  private timeStamp = Date.now().toString();
  private apiKey = config.PUBLIC_KEY;
  private privateKey = config.PRIVATE_KEY;
  private md5hash = this.md5.appendStr(this.timeStamp+this.privateKey+this.apiKey).end();
  private entriesLimit = 50;
  private apiUrl = `https://gateway.marvel.com/v1/public/characters?limit=${this.entriesLimit}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5hash}`;
  offset = 0;
  constructor(private http:HttpClient,
    private _store: Store<IAppState>) { }

  getHeroes(offset: number = 0): Observable<any> {
    this.offset += offset;
    console.log('api endpoint:', this.apiUrl + "&offset=" + this.offset)
    return this.http.get(this.apiUrl + "&offset=" + this.offset);
  }

  getHeroes2() {
    this._store.dispatch(new GetHeroes());
  }
}
