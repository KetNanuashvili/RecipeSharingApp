import { createReducer, on } from '@ngrx/store';
import { loadRecipesSuccess, loadRecipesFailure, addRecipeSuccess, addRecipeFailure, updateRecipeSuccess, updateRecipeFailure, deleteRecipeSuccess, deleteRecipeFailure } from '../actions/load-recipes.actions';
import { Recipe } from '../interface/recipe';

export interface RecipeState {
  recipes: Recipe[];
  error: string | null;
}

export const initialState: RecipeState = {
  recipes: [],
  error: null,
};

export const recipeReducer = createReducer(
  initialState,
  on(loadRecipesSuccess, (state, { recipes }) => ({
    ...state,
    recipes: recipes,
  })),
  on(loadRecipesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(addRecipeSuccess, (state, { recipe }) => ({
    ...state,
    recipes: [...state.recipes, recipe],
  })),
  on(addRecipeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(updateRecipeSuccess, (state, { recipe }) => ({
    ...state,
    recipes: state.recipes.map(r => r.id === recipe.id ? recipe : r),
  })),
  on(updateRecipeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(deleteRecipeSuccess, (state, { id }) => ({
    ...state,
    recipes: state.recipes.filter(recipe => recipe.id !== id),
  })),
  on(deleteRecipeFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
