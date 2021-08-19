import { createSelector, createFeatureSelector } from "@ngrx/store";

import { HerosState } from "../state/heroes.state";

export const selectHeroesState = createFeatureSelector<HerosState>('heros');
export const selectHeroesFromState = (state: HerosState) => {
    console.log(state.heroes);
    return state.heroes
};


export const selectHeroes = createSelector(
    selectHeroesState,
    selectHeroesFromState
);