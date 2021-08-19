import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from "../state/app.state";
import { 
    GetHeroesSuccess,
    EHeroesActions,
    GetHeroes 
} from "../actions/heroes.actions";
import { HeroService } from "src/app/services/hero.service";
import { selectHeroes } from "../selectors/hero.selector";

//testing import below
import { Md5 } from "ts-md5/dist/md5";
import { config } from "src/config";
import { HttpClient } from "@angular/common/http";

@Injectable()


export class HeroEffetcs {
    private md5 = new Md5();
    private timeStamp = Date.now().toString();
    private apiKey = config.PUBLIC_KEY;
    private privateKey = config.PRIVATE_KEY;
    private md5hash = this.md5.appendStr(this.timeStamp+this.privateKey+this.apiKey).end();
    private entriesLimit = 25;
    private apiUrl = `https://gateway.marvel.com/v1/public/characters?limit=${this.entriesLimit}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5hash}`;
    offset = 0;
    getHero$ = createEffect(() => this._actions$.pipe(
        ofType<GetHeroes>(EHeroesActions.GetHeroes),
        withLatestFrom(this._store.pipe(select(selectHeroes))),
        switchMap(() => this.http.get(this.apiUrl + "&offset=" + this.offset)),
        switchMap((heroHttp: any) => {
            this.offset += 25;
            console.log(heroHttp.data);
            return of(new GetHeroesSuccess(heroHttp.data.results))
        }
        )
    ))
    constructor(
        private _actions$: Actions,
        private _store: Store<IAppState>,
        private http:HttpClient,
    ) {}
}
