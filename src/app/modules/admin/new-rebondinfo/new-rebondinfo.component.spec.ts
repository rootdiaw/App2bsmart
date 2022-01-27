import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRebondinfoComponent } from './new-rebondinfo.component';

describe('NewRebondinfoComponent', () => {
  let component: NewRebondinfoComponent;
  let fixture: ComponentFixture<NewRebondinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRebondinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRebondinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
