import { Action } from "@ngrx/store";

import { PageState } from "src/app/interfaces/Page";

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
    // fix the type for payload below
    constructor (public payload: any) {}
}

export type PageActions = GetOtherHeros | GetOtherHerosSuccess;