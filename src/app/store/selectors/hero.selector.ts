import { createSelector, createFeatureSelector } from "@ngrx/store";

import { IAppState } from "../state/app.state";
import { HEROOBJ, Result } from "src/app/interfaces/Hero";
import { initialHeroesState } from "../state/heroes.state";

export const selectHeroes = ( state: IAppState ) => state.entities;

export const selectHeroesList = createSelector(
    selectHeroes,
    (state: HEROOBJ) => { 
        // debugger
        console.log("selector", state)
        state.data?.results }
);

export const selectHeroes2 = createFeatureSelector<IAppState, Result[]>('entities')

export const selectHeroesList2 = createSelector (
    selectHeroes2,
    (state: Result[]) => { 
        // debugger
        state
        console.log("selector", state)
      }
)