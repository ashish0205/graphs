import { Action } from "@ngrx/store";
import { Products } from "../model/product.model";

export const FETCH = "[PRODUCTS] Fetch product";
export class Fetch implements Action {
  type: typeof FETCH = FETCH;
}


export const FETCH_SUCCESS = '[PRODUCTS] Fetch product success';
export class FetchSuccess implements Action {
  type: typeof FETCH_SUCCESS = FETCH_SUCCESS;

  constructor(readonly payload: Products[]) { }
}

export const FETCH_FAILED = '[CLIENTS] Fetch product failed';
export class FetchError implements Action {
  type: typeof FETCH_FAILED = FETCH_FAILED;
}


export const CREATE = '[CLIENTS] Create a product';
export class Create implements Action {
  type: typeof CREATE = CREATE;

  constructor(readonly payload: Products) { }
}

export const CREATE_SUCCESS = "[PRODUCTS] Create product success";
export class CreateSuccess implements Action {
  type: typeof CREATE_SUCCESS = CREATE_SUCCESS;

  constructor(readonly payload: Products) {}
}

export const CREATE_FAILED = "[PRODUCTS] Create product failed";
export class CreateError implements Action {
  type: typeof CREATE_FAILED = CREATE_FAILED;
}

export const UPDATE = "[PRODUCTS] Update product";
export class Update implements Action {
  type: typeof UPDATE = UPDATE;

  constructor(readonly payload: Products) {}
}
export const UPDATE_SUCCESS = "[PRODUCTS] Update product success";
export class UpdateSuccess implements Action {
  type: typeof UPDATE_SUCCESS = UPDATE_SUCCESS;

  constructor(readonly payload: Products) {}
}
export const UPDATE_FAILED = "[PRODUCTS] Update product failed";
export class UpdateFailed implements Action {
  type: typeof UPDATE_FAILED = UPDATE_FAILED;
}

export const SELECT = "[PRODUCTS] Select product";
export class Select implements Action {
  type: typeof SELECT = SELECT;

  constructor(readonly payload: Products) {}
}
export type All =
  | Fetch
  | FetchSuccess
  | FetchError
  | Create
  | CreateSuccess
  | CreateError
  | Update
  | UpdateSuccess
  | UpdateFailed
  | Select;
