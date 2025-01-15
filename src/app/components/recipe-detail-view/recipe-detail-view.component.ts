import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router ,} from '@angular/router';
@Component({
  selector: 'app-recipe-detail-view',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './recipe-detail-view.component.html',
  styleUrl: './recipe-detail-view.component.css'
})
export class RecipeDetailViewComponent implements OnInit{
  recipe: any | undefined;
  
  constructor(private RecipesService : RecipesService, private router: Router,  private route: ActivatedRoute,){

    
  }
  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.recipe = this.RecipesService.getRecipeById(id);
      console.log(this.recipe);
      
    }
  }

  returnMainPage(): void {
    this.router.navigate(['/mainPage']);
  }
  
}
