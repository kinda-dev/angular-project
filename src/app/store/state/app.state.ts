import { RouterReducerState } from '@ngrx/router-store';
import { HEROOBJ } from 'src/app/interfaces/Hero';
import { IPageState } from './pages.state';

import { initialHeroesState } from './heroes.state';
import { initialPageState } from './pages.state';

export interface IAppState {
    router?: RouterReducerState;
    heros: HEROOBJ;
    pages: IPageState;
}

export const initialAppState: IAppState = {
    heros: initialHeroesState,
    pages: initialPageState
}

export function getInitialSate(): IAppState {
    return initialAppState;
}