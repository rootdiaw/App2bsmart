import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSupprotparutionComponent } from './new-supprotparution.component';

describe('NewSupprotparutionComponent', () => {
  let component: NewSupprotparutionComponent;
  let fixture: ComponentFixture<NewSupprotparutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSupprotparutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSupprotparutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
