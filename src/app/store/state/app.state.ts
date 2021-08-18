import { RouterReducerState } from '@ngrx/router-store';
import { HEROOBJ } from 'src/app/interfaces/Hero';

import { initialHeroesState } from './heroes.state';

export interface IAppState {
    router?: RouterReducerState;
    entities: HEROOBJ;
}

export const initialAppState: IAppState = {
    entities: initialHeroesState
}

export function getInitialSate(): IAppState {
    return initialAppState;
}