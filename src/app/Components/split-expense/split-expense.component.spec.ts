import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitExpenseComponent } from './split-expense.component';

describe('SplitExpenseComponent', () => {
  let component: SplitExpenseComponent;
  let fixture: ComponentFixture<SplitExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
