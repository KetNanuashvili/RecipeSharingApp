import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipeState } from '../reducer/recipe.reducer';


export const selectRecipesState = createFeatureSelector<RecipeState>('recipes');

export const selectRecipes = createSelector(
  selectRecipesState,
  (state: RecipeState) => state.recipes
);

export const selectError = createSelector(
  selectRecipesState,
  (state: RecipeState) => state.error
);
