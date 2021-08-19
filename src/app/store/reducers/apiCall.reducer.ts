import { Action } from '@ngrx/store';
import * as ApiCallActions from '../actions/apiCall.actions';
const initialState = {
  heroes: []
};

export function apiCallReducer(
  state = initialState,
  action: ApiCallActions.GetHeroes
) {
  switch (action.type) {
    case ApiCallActions.GET_HEROES:
      return {
        ...state,
        heroes: [...state.heroes, action.payload]
      };
  }
}