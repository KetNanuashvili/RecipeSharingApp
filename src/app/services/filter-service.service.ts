import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {
  filterRecipes(recipes: any[], filterGroup: FormGroup): any[] {
    const { title, ingredients } = filterGroup.value;

    return recipes.filter((recipe) => {
      const titleMatch = recipe.title.toLowerCase().includes(title.toLowerCase());
      const ingredientsMatch = recipe.ingredients.some((ingredient: string) =>
        ingredient.toLowerCase().includes(ingredients.toLowerCase())
      );

      return titleMatch && ingredientsMatch;
    });
  }

  createSearchForm(): FormGroup {
    return new FormGroup({
      title: new FormControl(''),
      ingredients: new FormControl(''),
    });
  }
}
