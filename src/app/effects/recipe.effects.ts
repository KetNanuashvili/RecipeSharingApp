import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadRecipesSuccess, loadRecipesFailure, addRecipeSuccess, addRecipeFailure, updateRecipeSuccess, updateRecipeFailure, deleteRecipeSuccess, deleteRecipeFailure, loadRecipes, addRecipe, updateRecipe, deleteRecipe } from '../actions/load-recipes.actions';
import { Recipe } from '../interface/recipe';

@Injectable()
export class RecipeEffects {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store
  ) {}

  // Load Recipes
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecipes),
      switchMap(() =>
        this.http.get<Recipe[]>(this.apiUrl).pipe(
          map((recipes) => loadRecipesSuccess({ recipes })),
          catchError((error) => of(loadRecipesFailure({ error })))
        )
      )
    )
  );

  // Add Recipe
  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addRecipe),
      switchMap(({ recipe }) =>
        this.http.post<Recipe>(this.apiUrl, recipe).pipe(
          map((newRecipe) => addRecipeSuccess({ recipe: newRecipe })),
          catchError((error) => of(addRecipeFailure({ error })))
        )
      )
    )
  );

  // Update Recipe
  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRecipe),
      switchMap(({ recipe }) =>
        this.http.put<Recipe>(`${this.apiUrl}/${recipe.id}`, recipe).pipe(
          map((updatedRecipe) => updateRecipeSuccess({ recipe: updatedRecipe })),
          catchError((error) => of(updateRecipeFailure({ error })))
        )
      )
    )
  );

  // Delete Recipe
  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRecipe),
      switchMap(({ id }) =>
        this.http.delete(`${this.apiUrl}/${id}`).pipe(
          map(() => deleteRecipeSuccess({ id })),
          catchError((error) => of(deleteRecipeFailure({ error })))
        )
      )
    )
  );
}
