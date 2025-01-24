import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-main-page-list-of-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page-list-of-recipe.component.html',
  styleUrls: ['./main-page-list-of-recipe.component.css']
})
export class MainPageListOfRecipeComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data; // No need to modify the image URL anymore
      console.log(data); // For diagnostics
    });
  }

  viewRecipe(id: number): void {
    this.router.navigate(['/recipe', id]);
    console.log('Navigating to recipe with id:', id); 
    
  }

  addRecipe(): void {
    const newRecipe = {
      title: 'ჩიზბურგერი',
      description: 'გემრიელი ჩიზბურგერი',
      ingredients: ['ხორცი', 'პურის ცომი', 'ჩიზი'],
      instructions: 'მზა ჩიზბურგერის რეცეპტი'
    };

    this.recipeService.addRecipe(newRecipe).subscribe((data) => {
      this.recipes.push(data);
    });
  }

  deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id).subscribe(() => {
      this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    });
  }

  addNewRecipe(): void {
    this.router.navigate(['/cardForm']);
  }
}
