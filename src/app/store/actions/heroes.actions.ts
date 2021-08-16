import { Action } from "@ngrx/store";

import { HEROOBJ } from "src/app/interfaces/Hero";

export enum EHeroesActions {
    GetHeroes = '[Hero] Get Heroes',
    GetHeroesSuccess = '[Hero] Get Heroes Success'
}

export class GetHeroes implements Action {
    public readonly type = EHeroesActions.GetHeroes;
}

export class GetHeroesSuccess implements Action {
    public readonly type = EHeroesActions.GetHeroesSuccess;
    constructor(public payload: HEROOBJ) {}
}

export type HeroActions = GetHeroes | GetHeroesSuccess;