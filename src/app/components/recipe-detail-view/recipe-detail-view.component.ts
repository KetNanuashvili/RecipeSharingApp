import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { Router ,} from '@angular/router';
@Component({
  selector: 'app-recipe-detail-view',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './recipe-detail-view.component.html',
  styleUrl: './recipe-detail-view.component.css'
})
export class RecipeDetailViewComponent implements OnInit{
  recipes: any [] =[];
  
  constructor(private RecipesService : RecipesService, private router: Router){

    
  }

  ngOnInit(){
  
  }
  returnMainPage(): void {
    console.log('Navigating to main page...');
    this.router.navigate(['/mainPage']); 
  }
  
}
