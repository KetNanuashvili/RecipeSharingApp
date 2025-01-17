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
      const id = Number(params.get('id'));
      if (id) {
        // Use the getRecipeById method to fetch the specific recipe by its ID
        this.recipeService.getRecipeById(id).subscribe(
          (recipe) => {
            this.recipe = recipe;  // Set the fetched recipe to the 'recipe' property
          },
          (error) => {
            console.error('Error fetching recipe data:', error);  // Handle errors
          }
        );
      }
    });
  }

  returnMainPage(): void {
    this.router.navigate(['/mainPage']);
  }
}
