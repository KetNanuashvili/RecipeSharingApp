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
      this.recipes = data.map(recipe => {
        // თუ სურათის მისამართი არ იწყება http-ით, განახორციელეთ სწორი URL
        if (recipe.img && !recipe.img.startsWith('http')) {
          recipe.img = 'http://localhost:3000/recipes/' + recipe.img; // განსაზღვრული URL სერვერისთვის
        }
        else if (!recipe.img) {
          recipe.img = 'http://localhost:3000/recipes/default-image.png'; // fallback სურათი
        }
        return recipe;
      });
      console.log(data); // გამოიყენეთ თუ საჭიროა დიაგნოსტიკა
    });
  }
  

  handleImageUpload(event: any, recipe: any): void {
    const file = event.target.files[0]; // აირჩიეთ ფაილი
    const formData = new FormData();
    formData.append('image', file, file.name); // სურათი დამატებული ფორმაში
  
    this.recipeService.uploadImage(formData).subscribe(response => {
      console.log('Image uploaded successfully:', response);
      
      // სურათის ახალ მისამართზე განახლება
      recipe.img = 'http://localhost:3000/recipes/' + response.imagePath;
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

  addNewRecipe(): void{
    this.router.navigate(['/cardForm']);
  }
}