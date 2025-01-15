import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageListOfRecipeComponent } from './components/main-page-list-of-recipe/main-page-list-of-recipe.component';
import { RecipeDetailViewComponent } from './components/recipe-detail-view/recipe-detail-view.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesService } from './services/recipes.service';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MainPageListOfRecipeComponent,
    RecipeDetailViewComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService],
})
export class AppComponent {
  title = 'my-angular-app';
}
