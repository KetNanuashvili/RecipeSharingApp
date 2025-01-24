import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((recipes: any[]) => {
        // You can handle any necessary transformations here, e.g., adding default images if needed
        return recipes;
      }),
      catchError((error) => {
        console.error('Error fetching recipes', error);
        return of([]);
      })
    );
  }

  getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error fetching recipe with id ${id}`, error);
        return of(null); // Return null in case of error
      })
    );
  }
  
  addRecipe(recipe: any): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      switchMap((recipes: any[]) => {
        const nextId = this.getNextId(recipes);
        const newRecipe = { ...recipe, id: nextId.toString() };  // ახალ რეცეპტს მიენიჭება ახალი ID
  
        return this.http.post<any>(this.apiUrl, newRecipe);
      }),
      catchError((error) => {
        console.error('Error adding recipe', error);
        return of(null);
      })
    );
  }
  
  
  private getNextId(recipes: any[]): number {
    const maxId = Math.max(...recipes.map(recipe => parseInt(recipe.id, 10)));
    return maxId + 1;
  }

  updateRecipe(id: number, recipe: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, recipe).pipe(
      catchError((error) => {
        console.error(`Error updating recipe with id ${id}`, error);
        return of(null);
      })
    );
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error deleting recipe with id ${id}`, error);
        return of(null);  // წაშლის წარუმატებლობის შემთხვევაში დაბრუნდება null
      })
    );
  }
  
}
