import { EPageActions } from "../actions/pages.actions";
import { PageActions } from "../actions/pages.actions";
import { initialPageState, IPageState } from "../state/pages.state";

export function pagesReducer(
    state = initialPageState,
    action: PageActions
) {
    Object.freeze(state);
    
    switch(action.type) {
        case EPageActions.GetOtherHerosSuccess:
            return {
                ...state,
                page: action.payload,
                isLoading: true
            };
        default:
            return state;
    }
}