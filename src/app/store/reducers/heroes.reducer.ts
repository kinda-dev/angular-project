// import { HEROOBJ } from "src/app/interfaces/Hero";
import { initialHeroesState } from "../state/heroes.state"; 
import { EHeroesActions } from "../actions/heroes.actions";
import { HeroActions } from "../actions/heroes.actions";


export function heroesReducer(
    state = initialHeroesState, 
    action: HeroActions
    ) {
    Object.freeze(state);

    switch(action.type) {
        case EHeroesActions.GetHeroesSuccess:
            return {
                ...state,
                heroes: action.payload
            };
        default:
            return state;
    }
}

// the heroes return is for testing purposes