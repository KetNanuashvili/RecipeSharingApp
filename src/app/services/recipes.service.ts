import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
    public recipes = [
      {
        id: 1,
        title: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        ingredients: [
          '200g spaghetti',
          '100g pancetta',
          '2 large eggs',
          '50g Parmesan cheese',
          'Salt and black pepper to taste',
        ],
        instructions: [
          'Cook spaghetti in salted boiling water until al dente.',
          'Fry pancetta until crispy in a skillet.',
          'Beat eggs and mix with grated Parmesan cheese.',
          'Toss hot spaghetti with pancetta and egg mixture. Season with salt and pepper.',
          'Serve immediately with extra Parmesan cheese on top.',
        ],
        image: 'burger.jpg',
      },
      {
        id: 2,
        title: 'Chicken Curry',
        description: 'A flavorful and spicy chicken curry with a rich sauce.',
        ingredients: [
          '500g chicken breast',
          '1 large onion, diced',
          '2 garlic cloves, minced',
          '200ml coconut milk',
          '2 tbsp curry powder',
        ],
        instructions: [
          'Sauté onions and garlic until golden.',
          'Add chicken pieces and cook until browned.',
          'Mix in curry powder and stir well.',
          'Pour in coconut milk and simmer for 20 minutes.',
          'Serve with steamed rice or flatbread.',
        ],
        image: 'burger.jpg',
      },
      {
        id: 3,
        title: 'Vegetable Stir Fry',
        description: 'A healthy mix of fresh vegetables cooked in a savory sauce.',
        ingredients: [
          '1 cup broccoli florets',
          '1 bell pepper, sliced',
          '1 carrot, julienned',
          '2 tbsp soy sauce',
          '1 tbsp sesame oil',
        ],
        instructions: [
          'Heat sesame oil in a large pan or wok.',
          'Add broccoli, bell pepper, and carrot; stir-fry for 5 minutes.',
          'Add soy sauce and cook for another 2 minutes.',
          'Remove from heat and serve hot with rice or noodles.',
          'Garnish with sesame seeds if desired.',
        ],
        image: 'burger.jpg',
      },
      {
        id: 4,
        title: 'Chocolate Cake',
        description: 'A moist and rich chocolate cake that melts in your mouth.',
        ingredients: [
          '1 cup all-purpose flour',
          '1 cup sugar',
          '1/2 cup cocoa powder',
          '1 tsp baking powder',
          '2 large eggs',
        ],
        instructions: [
          'Preheat oven to 350°F (175°C).',
          'Mix flour, sugar, cocoa powder, and baking powder in a bowl.',
          'Add eggs and mix until smooth.',
          'Pour batter into a greased baking pan and bake for 30-35 minutes.',
          'Let the cake cool before serving.',
        ],
        image: 'burger.jpg',
      },
      {
        id: 5,
        title: 'Chocolate Cake',
        description: 'A moist and rich chocolate cake that melts in your mouth.',
        ingredients: [
          '1 cup all-purpose flour',
          '1 cup sugar',
          '1/2 cup cocoa powder',
          '1 tsp baking powder',
          '2 large eggs',
        ],
        instructions: [
          'Preheat oven to 350°F (175°C).',
          'Mix flour, sugar, cocoa powder, and baking powder in a bowl.',
          'Add eggs and mix until smooth.',
          'Pour batter into a greased baking pan and bake for 30-35 minutes.',
          'Let the cake cool before serving.',
        ],
        image: 'burger.jpg',
      },
      {
        id: 6,
        title: 'Chocolate Cake',
        description: 'A moist and rich chocolate cake that melts in your mouth.',
        ingredients: [
          '1 cup all-purpose flour',
          '1 cup sugar',
          '1/2 cup cocoa powder',
          '1 tsp baking powder',
          '2 large eggs',
        ],
        instructions: [
          'Preheat oven to 350°F (175°C).',
          'Mix flour, sugar, cocoa powder, and baking powder in a bowl.',
          'Add eggs and mix until smooth.',
          'Pour batter into a greased baking pan and bake for 30-35 minutes.',
          'Let the cake cool before serving.',
        ],
        image: 'burger.jpg',
      },
      {
        id: 7,
        title: 'Chocolate Cake',
        description: 'A moist and rich chocolate cake that melts in your mouth.',
        ingredients: [
          '1 cup all-purpose flour',
          '1 cup sugar',
          '1/2 cup cocoa powder',
          '1 tsp baking powder',
          '2 large eggs',
        ],
        instructions: [
          'Preheat oven to 350°F (175°C).',
          'Mix flour, sugar, cocoa powder, and baking powder in a bowl.',
          'Add eggs and mix until smooth.',
          'Pour batter into a greased baking pan and bake for 30-35 minutes.',
          'Let the cake cool before serving.',
        ],
        image: 'burger.jpg',
      },
      {
        id: 8,
        title: 'Chocolate Cake',
        description: 'A moist and rich chocolate cake that melts in your mouth.',
        ingredients: [
          '1 cup all-purpose flour',
          '1 cup sugar',
          '1/2 cup cocoa powder',
          '1 tsp baking powder',
          '2 large eggs',
        ],
        instructions: [
          'Preheat oven to 350°F (175°C).',
          'Mix flour, sugar, cocoa powder, and baking powder in a bowl.',
          'Add eggs and mix until smooth.',
          'Pour batter into a greased baking pan and bake for 30-35 minutes.',
          'Let the cake cool before serving.',
        ],
        image: 'burger.jpg',
      },
      
    ];

    constructor(){

    }
   getRecipes(){
    return this.recipes;
   }

   getRecipeById(id: number){
    return this.recipes.find((recipe)=> recipe.id === id);
   }
  }
