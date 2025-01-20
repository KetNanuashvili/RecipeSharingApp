import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRecipes'
})
export class FilterRecipesPipe implements PipeTransform {

  transform(recipes: any[], searchTerm: string, field: string): any[] {
    if (!recipes || !searchTerm) {
      return recipes;
    }
    return recipes.filter(recipe =>
      recipe[field]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
