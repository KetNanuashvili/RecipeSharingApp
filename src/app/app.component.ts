import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainPageListOfRecipeComponent } from './components/main-page-list-of-recipe/main-page-list-of-recipe.component';
import { RecipeDetailViewComponent } from './components/recipe-detail-view/recipe-detail-view.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeService } from './services/recipes.service';
import { routes } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { AddNewCardFormComponent } from './components/add-new-card-form/add-new-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupServiceService } from './services/form-group-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MainPageListOfRecipeComponent,
    RecipeDetailViewComponent,
    HeaderComponent,
    FooterComponent,
    AddNewCardFormComponent,
    ReactiveFormsModule,
    HttpClientModule ,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService,FormGroupServiceService ],
})
export class AppComponent {
  title = 'my-angular-app';
}
