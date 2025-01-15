import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
@Component({
  selector: 'app-recipe-detail-view',
  imports: [],
  standalone: true,
  templateUrl: './recipe-detail-view.component.html',
  styleUrl: './recipe-detail-view.component.css'
})
export class RecipeDetailViewComponent implements OnInit{
  recipes: any [] =[];

  constructor(private RecipesService : RecipesService){

    
  }

  ngOnInit(){
    this.recipes= this.RecipesService.getRecipes();
    console.log(this.recipes);
    
    // this.recipes.forEach(element => {
    //   console.log(element);
    // });
  }
}
