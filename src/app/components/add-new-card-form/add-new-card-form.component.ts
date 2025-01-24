import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroupServiceService } from '../../services/form-group-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-add-new-card-form',
  templateUrl: './add-new-card-form.component.html',
  styleUrls: ['./add-new-card-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class AddNewCardFormComponent implements OnInit {
  recipeForm!: FormGroup;
  isEditMode = false;
  constructor(
    private formGroupService: FormGroupServiceService,
    private router: Router,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.formGroupService.createRecipeForm();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.recipeService.getRecipeById(Number(id)).subscribe(recipe => {
          if (recipe) {
            this.recipeForm.patchValue(recipe); // ფორმის შევსება არსებული მონაცემებით
          }
        });
      }
    });
  }

  loadRecipeData(id: number): void {
    this.recipeService.getRecipeById(id).subscribe((recipe) => {
      if (recipe) {
        this.recipeForm.patchValue(recipe);
      } else {
        alert('Recipe not found!');
      }
    });
  }
  onSubmit(): void {
    if (this.recipeForm.valid) {
      const recipeData = this.recipeForm.value;
      this.addRecipe(recipeData); // Directly add the recipe data without image handling
    }
  }
  saveRecipe(): void {
    if (this.isEditMode) {
      // რედაქტირება ხდება
      this.recipeService.updateRecipe(this.recipeForm.value.id, this.recipeForm.value).subscribe(() => {
        alert('Recipe updated successfully!');
        this.router.navigate(['/mainPage']);
      });
    } else {
      // ახალი რეცეპტი დაემატება
      this.recipeService.addRecipe(this.recipeForm.value).subscribe(() => {
        alert('Recipe added successfully!');
        this.router.navigate(['/mainPage']);
      });
    }
  }
  
  private addRecipe(recipeData: any): void {
    this.recipeService.addRecipe(recipeData).subscribe(response => {
      if (response) {
        // Show success alert
        alert('Recipe added successfully!');
        
        // Close or navigate away from the card (depending on your application logic)
        this.router.navigate(['/mainPage']); // Navigate to the main page, for example
      } else {
        console.error('Failed to add recipe');
        alert('Failed to add recipe. Please try again.');
      }
    });
  }
  

  closeNewCard(): void {
    this.router.navigate(['mainPage']);
  }
}


