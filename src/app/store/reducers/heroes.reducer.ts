import { HEROOBJ } from "src/app/interfaces/Hero";
import { HeroActions, HeroActionTypes} from "../actions/heroes.actions";
import { Action } from '@ngrx/store'

let heroes: HEROOBJ[] = [];

const oldState = {
    heroes: heroes
};

export function heroesReducer(
    state = oldState, 
    action: HeroActions
    ) {
    Object.freeze(state);

    switch(action.type) {
        case HeroActionTypes.RECEIVE_HEROES:
            return {
                ...state,
                heroes: action.payload
            };
        default:
            return state;
    }
}