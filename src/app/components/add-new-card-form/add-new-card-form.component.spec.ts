import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCardFormComponent } from './add-new-card-form.component';

describe('AddNewCardFormComponent', () => {
  let component: AddNewCardFormComponent;
  let fixture: ComponentFixture<AddNewCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCardFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
