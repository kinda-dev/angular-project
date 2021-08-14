import { Action } from '@ngrx/store';

import { HEROOBJ } from 'src/app/interfaces/Hero';

export const HeroActionTypes = {
    RECEIVE_HEROES: 'RECEIVE_HEROES'
};

export class GetHeroes implements Action {
    readonly type = HeroActionTypes.RECEIVE_HEROES;
    constructor(public payload: HEROOBJ[]) {}
}

export type HeroActions = GetHeroes;