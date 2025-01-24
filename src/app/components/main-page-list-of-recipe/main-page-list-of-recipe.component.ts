import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipes.service';
import { FilterServiceService } from '../../services/filter-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page-list-of-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './main-page-list-of-recipe.component.html',
  styleUrls: ['./main-page-list-of-recipe.component.css']
})
export class MainPageListOfRecipeComponent implements OnInit {
  recipes: any[] = [];
  filteredItems: any[] = [];
  FilterForm!: FormGroup;
  constructor(private recipeService: RecipeService, private router: Router, private filterServiceService: FilterServiceService) {}

  ngOnInit(): void {
    this.getRecipes();

    // ინიციალიზაცია FilterForm-ის
    this.FilterForm = this.filterServiceService.createSearchForm();
    console.log(this.FilterForm);

    // როცა ფორმის მნიშვნელობა შეიცვლება, აწარმოეთ ფილტრაცია
    this.FilterForm.valueChanges.subscribe(() => {
      this.filterItems();
    });
    
  }


  filterItems(): void {
    const { title, ingredients } = this.FilterForm.value;
    if (title || ingredients) {
      this.filteredItems = this.filterServiceService.filterRecipes(this.recipes, this.FilterForm);
    } else {
      this.filteredItems = []; // If nothing is entered, clear the filtered items
    }
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data; 
      console.log(data);
      // this.filterItems(); //
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
