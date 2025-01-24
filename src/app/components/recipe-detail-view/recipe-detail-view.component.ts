import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.css']
})
export class RecipeDetailViewComponent implements OnInit {
  recipe: any;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id')); // აქ 'id' ემთხვევა როუტის პარამეტრს
      console.log('Received ID:', id);
  
      if (!id || isNaN(id)) {
        console.error('Invalid ID received!');
        alert('Invalid or missing recipe ID!');
        this.router.navigate(['/mainPage']);
        return;
      }
  
      this.recipeService.getRecipeById(id).subscribe(
        (recipe) => {
          console.log('Fetched Recipe:', recipe);
          if (recipe) {
            this.recipe = recipe;
          } else {
            console.error('Recipe not found!');
            alert('Recipe not found!');
            this.router.navigate(['/mainPage']);
          }
        },
        (error) => {
          console.error('Error fetching recipe data:', error);
        }
      );
    });
  }
  
  
  

  returnMainPage(): void {
    this.router.navigate(['/mainPage']);
  }
}