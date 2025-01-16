import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroupServiceService } from '../../services/form-group-service.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-card-form',
  templateUrl: './add-new-card-form.component.html',
  styleUrls: ['./add-new-card-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class AddNewCardFormComponent implements OnInit {
  recipeForm!: FormGroup;


  constructor(private formGroupService: FormGroupServiceService,  private router: Router,  private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.recipeForm = this.formGroupService.createRecipeForm();
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      console.log('Form Data:', this.recipeForm.value);
    }
  }

  closeNewCard(){
    
  }
}