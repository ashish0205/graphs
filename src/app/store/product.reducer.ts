import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Products } from "../model/product.model";
import * as actions from "./product.actions"

export const FEATURE_KEY = "Profile";

export interface State extends EntityState<Products> {
  loading: boolean;
  loaded: boolean;
  selectedId: string;
}

export const adapter: EntityAdapter<Products> = createEntityAdapter<Products>({
  selectId: (product: Products) => product._id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
  selectedId: null,
});
export function reducer(state = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.FETCH:
    case actions.UPDATE:
      return { ...state, loading: true };

    case actions.CREATE_SUCCESS:
      return adapter.upsertOne(action.payload, {
        ...state,
        loading: false,
      });

    case actions.CREATE_FAILED:
      return {
        ...state,
        loading: false,
      };

    case actions.UPDATE_SUCCESS:
      return adapter.upsertOne(action.payload, {
        ...state,
        loading: false,
      });

    case actions.UPDATE_FAILED:
      return {
        ...state,
        loading: false,
      };
  }
}
export const getSelectedId = (state: State) => state.selectedId;
export const getIsLoading = (state: State) => state.loading;
