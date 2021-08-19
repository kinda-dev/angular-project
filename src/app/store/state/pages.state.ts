export interface IPageState {
    page: number;
    isLoading: boolean;
}

export const initialPageState: IPageState = {
    page: 1,
    isLoading: true
}