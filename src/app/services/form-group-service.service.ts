import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGroupServiceService {
  constructor(private fb: FormBuilder) {}

  createRecipeForm(): FormGroup {
    return this.fb.group({
      id: new FormControl(null), 
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
      instructions: new FormControl('', [Validators.required]),
    });
  }
}
