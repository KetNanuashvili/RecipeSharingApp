import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-list-of-recipe',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './main-page-list-of-recipe.component.html',
  styleUrl: './main-page-list-of-recipe.component.css'
})
export class MainPageListOfRecipeComponent implements OnInit{
  recipes: any [] =[];

  constructor(private RecipesService : RecipesService, private router: Router){

  }

  ngOnInit(){
    this.recipes= this.RecipesService.getRecipes();
    console.log(this.recipes);
    
    // this.recipes.forEach(element => {
    //   console.log(element);
    // });
  }

  viewRecipe(id: number): void {
    this.router.navigate(['/recipeDetail', id]); 
  }
}
