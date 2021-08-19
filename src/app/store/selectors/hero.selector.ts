import { createSelector, createFeatureSelector } from "@ngrx/store";

// import { IAppState } from "../state/app.state";
// import { HEROOBJ, Result } from "src/app/interfaces/Hero";
import { HerosState } from "../state/heroes.state";

/// export const selectHeroes = ( state: IAppState ) => state.entities;
export const selectHeroesState = createFeatureSelector<HerosState>('heros');
export const selectHeroesFromState = (state: HerosState) => {
    console.log(state.heroes);
    return state.heroes
};
// export const selectHeroesList2 = createSelector(
//     selectHeroes,
//     (state: HEROOBJ) => { 
//         // debugger
//         console.log("selector", state)
//         state.data?.results }
// );


export const selectHeroes = createSelector(
    selectHeroesState,
    selectHeroesFromState
);



// export const selectHeroesList = createSelector (
//     selectHeroesState,
//     selectHeroes,
//     (state: Result[]) => { 
//         // debugger
//         state
//         console.log("selector", state)
//         return state.heroes;
//       }
// )