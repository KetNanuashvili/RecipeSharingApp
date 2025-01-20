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

  constructor(
    private formGroupService: FormGroupServiceService,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.formGroupService.createRecipeForm();
  }
  onSubmit(): void {
    if (this.recipeForm.valid) {
      const recipeData = this.recipeForm.value;
      const imageFile = this.recipeForm.value.img;
  
      if (imageFile instanceof File) {
        // FormData-ით ატვირთვა სერვერზე
        const formData = new FormData();
        formData.append('img', imageFile);
  
        this.recipeService.uploadImage(formData).subscribe(
          (response) => {
            console.log('Image uploaded successfully:', response);
            recipeData.img = response.imgUrl; // სერვერიდან დაბრუნებული URL
            this.addRecipe(recipeData);
          },
          (error) => {
            console.error('Image upload failed:', error);
          }
        );
      } else {
        this.addRecipe(recipeData);
      }
    }
  }
  
  private addRecipe(recipeData: any): void {
    this.recipeService.addRecipe(recipeData).subscribe(response => {
      if (response) {
        console.log('Recipe added successfully:', response);
      } else {
        console.error('Failed to add recipe');
      }
    });
  }
  
  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = (error) => reject('Error converting file to base64: ' + error);
    });
  }
  
  

  closeNewCard(): void {
    this.router.navigate(['mainPage']);
  }
}