import { createSelector } from "@ngrx/store";

import { IAppState } from "../state/app.state";
import { HEROOBJ } from "src/app/interfaces/Hero";
import { initialHeroesState } from "../state/heroes.state";

const selectHeroes = ( state: IAppState ) => state.heroes;

export const selectHeroesList = createSelector(
    selectHeroes,
    (state: HEROOBJ) => state.data?.results
);