import { Action } from '@ngrx/store';

export const GET_HEROES = 'GET_HEROES';

export class GetHeroes implements Action {
    readonly type = GET_HEROES;
    payload: any;
}