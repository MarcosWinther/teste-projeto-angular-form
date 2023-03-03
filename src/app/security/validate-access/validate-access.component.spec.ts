import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateAccessComponent } from './validate-access.component';

describe('ValidateAccessComponent', () => {
  let component: ValidateAccessComponent;
  let fixture: ComponentFixture<ValidateAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
