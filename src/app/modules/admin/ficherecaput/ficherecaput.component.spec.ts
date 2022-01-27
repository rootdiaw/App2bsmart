import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicherecaputComponent } from './ficherecaput.component';

describe('FicherecaputComponent', () => {
  let component: FicherecaputComponent;
  let fixture: ComponentFixture<FicherecaputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicherecaputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicherecaputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
