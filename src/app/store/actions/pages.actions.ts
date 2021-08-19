import { Action } from "@ngrx/store";

export enum EPageActions {
    GetOtherHeros = '[Hero] Get Other Heroes',
    GetOtherHerosSuccess = '[Hero] Get Other Heroes Success'
}

export class GetOtherHeros implements Action {
    public readonly type = EPageActions.GetOtherHeros;
    constructor (public payload: number) {}
}

export class GetOtherHerosSuccess implements Action {
    public readonly type = EPageActions.GetOtherHerosSuccess;
    constructor (public payload: boolean) {}
}

export type PageActions = GetOtherHeros | GetOtherHerosSuccess;