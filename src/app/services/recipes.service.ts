import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

uploadImage(formData: FormData): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/upload-image`, formData); // Adjust URL as per your backend
}

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching recipes', error);
        return of([]);  
      })
    );
  }

  getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching recipe with id ${id}`, error);
        return of(null);  
      })
    );
  }

  addRecipe(recipe: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, recipe).pipe(
      catchError(error => {
        console.error('Error adding recipe', error);
        return of(null);
      })
    );
  }

  updateRecipe(id: number, recipe: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, recipe).pipe(
      catchError(error => {
        console.error(`Error updating recipe with id ${id}`, error);
        return of(null);
      })
    );
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error deleting recipe with id ${id}`, error);
        return of(null);
      })
    );
  }
}
