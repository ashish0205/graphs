import { ActionReducerMap } from '@ngrx/store';

import * as fromProducts from './store/product.reducer';


export interface AppState {
  products: fromProducts.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  products: fromProducts.reducer,
};
