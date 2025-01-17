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
      this.recipes = data;
      console.log(data);
    });
  }

  // Navigate to the RecipeDetailViewComponent with the selected recipe's id
  viewRecipe(id: number): void {
    this.router.navigate(['/recipe', id]);
  }
  

  addRecipe(): void {
    const newRecipe = {
      name: 'ჩიზბურგერი',
      ingredients: ['ხორცი', 'პურის ცომი', 'ჩიზი']
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
}
