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
      console.log('Form Data:', this.recipeForm.value);
      
      const recipeData = this.recipeForm.value;

      if (this.recipeForm.value.img instanceof File) {
        this.convertToBase64(this.recipeForm.value.img).then((base64Img) => {
          recipeData.img = base64Img;
          this.addRecipe(recipeData); // რეცეპტის დამატება
        }).catch(error => {
          console.error('Error converting file to base64:', error);
        });
      } else {
        this.addRecipe(recipeData); // რეცეპტის დამატება თუ არ არის სურათი
      }
    }
  }

  // რეცეპტის დამატება
  private addRecipe(recipeData: any): void {
    this.recipeService.addRecipe(recipeData).subscribe(response => {
      if (response) {
        console.log('Recipe added successfully:', response);
        // აქ შეგიძლიათ დაამატოთ რაიმე დამატებითი ლოგიკა, მაგალითად წარმატების შეტყობინება
      } else {
        console.error('Failed to add recipe');
      }
    });
  }

  // ფაილის Base64 ფორმატში გადაყვანა
  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        resolve(reader.result as string);  // Base64 მონაცემები
      };

      reader.onerror = (error) => {
        reject('Error converting file to base64: ' + error);
      };
    });
  }
  

  closeNewCard(): void {
    this.router.navigate(['mainPage']);
  }
}