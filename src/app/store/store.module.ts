import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";

import { IAppState } from "./state/app.state";
import { heroesReducer } from "./reducers/heroes.reducer";
import { pagesReducer } from "./reducers/pages.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    heros: heroesReducer,
    pages: pagesReducer
};