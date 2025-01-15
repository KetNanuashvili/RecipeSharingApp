import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageListOfRecipeComponent } from './main-page-list-of-recipe.component';

describe('MainPageListOfRecipeComponent', () => {
  let component: MainPageListOfRecipeComponent;
  let fixture: ComponentFixture<MainPageListOfRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageListOfRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageListOfRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
ng g 