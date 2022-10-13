import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom, catchError } from 'rxjs/operators';

import * as ProductActions from './product.actions';
import { Products } from '../model/product.model';
//import * as fromApp from '../../store/app.reducer';
import { Observable, of } from 'rxjs';
import { ProductService } from '../product.service';

@Injectable()
export class ProductEffects {

    constructor(
    private actions$: Actions,
    private http: HttpClient,
   // private store: Store<fromApp.AppState>,
    private productSvc:ProductService
  ) {}
  
  @Effect()
  saveProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductActions.Create>(ProductActions.CREATE),
    switchMap((({ payload }) =>
      this.productSvc.saveClient(payload).pipe(
        map(() => new ProductActions.CreateSuccess(payload)
        ),
        //  new profileAction.UpdateSuccess(payload)),
        catchError((err) => of(new ProductActions.CreateError()))
      )
    )
    ));
  // @Effect({dispatch: false})
  // storeRecipes = this.actions$.pipe(
  //   ofType(RecipesActions.STORE_RECIPES),
  //   withLatestFrom(this.store.select('recipes')),
  //   switchMap(([actionData, recipesState]) => {
  //     return this.http.put(
  //       'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
  //       recipesState.recipes
  //     );
  //   })
  // );


}
