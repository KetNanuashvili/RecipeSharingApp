import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGroupServiceService {
  constructor(private fb: FormBuilder) {}

  createRecipeForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      ingredients: ['', Validators.required],
      instructions: ['', [Validators.required, Validators.minLength(10)]],
      img: ['', [Validators.required, Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)/)]],
    });
  }
}
