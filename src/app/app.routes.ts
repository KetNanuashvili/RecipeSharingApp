import { Routes } from '@angular/router';
import { MainPageListOfRecipeComponent } from './components/main-page-list-of-recipe/main-page-list-of-recipe.component';
import { RecipeDetailViewComponent } from './components/recipe-detail-view/recipe-detail-view.component';
import { AddNewCardFormComponent } from './components/add-new-card-form/add-new-card-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mainPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainPageListOfRecipeComponent },
  { path: 'recipe/:id', component: RecipeDetailViewComponent },
  { path: 'cardForm', component: AddNewCardFormComponent },
  { path: 'cardForm/:id', component: AddNewCardFormComponent },
];
