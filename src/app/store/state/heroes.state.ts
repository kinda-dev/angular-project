import { HEROOBJ } from 'src/app/interfaces/Hero';

export const initialHeroesState: HEROOBJ = {};

export interface HerosState {
    code: 0,
    status: '',
    copyright: '',
    attributionText: '',
    attributionHTML: '',
    etag: '',
    heroes: {
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        results: []
    }

};