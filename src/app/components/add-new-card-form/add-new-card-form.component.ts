import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroupServiceService } from '../../services/form-group-service.service';
import { Router } from '@angular/router';
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

  constructor(
    private formGroupService: FormGroupServiceService,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    // Create the form without the 'img' field
    this.recipeForm = this.formGroupService.createRecipeForm();
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const recipeData = this.recipeForm.value;
      this.addRecipe(recipeData); // Directly add the recipe data without image handling
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


