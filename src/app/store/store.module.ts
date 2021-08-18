import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";

import { IAppState } from "./state/app.state";
import { heroesReducer } from "./reducers/heroes.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    entities: heroesReducer
};