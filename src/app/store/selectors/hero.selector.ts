import { createSelector, createFeatureSelector } from "@ngrx/store";

import { HerosState } from "../state/heroes.state";

export const selectHeroesState = createFeatureSelector<HerosState>('heros');
export const selectOffsetState = createFeatureSelector<HerosState>('offset');


export const selectHeroesFromState = (state: HerosState) => {
    console.log('STATE FROM SELECTOR', state.heroes);
    return state.heroes
};


export const selectHeroes = createSelector(
    selectHeroesState,
    selectHeroesFromState
);

export const selectOffSetFromState = (state: HerosState) => {
    console.log('state offset', state);
    return state
}

export const selectOffset = createSelector(
    selectOffsetState,
    selectOffSetFromState
)