import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPerceptionsupComponent } from './new-perceptionsup.component';

describe('NewPerceptionsupComponent', () => {
  let component: NewPerceptionsupComponent;
  let fixture: ComponentFixture<NewPerceptionsupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPerceptionsupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPerceptionsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
