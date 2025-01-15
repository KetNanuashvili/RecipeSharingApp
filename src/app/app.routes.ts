import { Routes } from '@angular/router';
import { MainPageListOfRecipeComponent } from './components/main-page-list-of-recipe/main-page-list-of-recipe.component';
import { RecipeDetailViewComponent } from './components/recipe-detail-view/recipe-detail-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mainPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainPageListOfRecipeComponent },
  { path: 'recipeDetail/:id', component: RecipeDetailViewComponent },
];
