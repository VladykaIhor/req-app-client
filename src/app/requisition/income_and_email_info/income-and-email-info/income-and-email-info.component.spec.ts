import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAndEmailInfoComponent } from './income-and-email-info.component';

describe('IncomeAndEmailInfoComponent', () => {
  let component: IncomeAndEmailInfoComponent;
  let fixture: ComponentFixture<IncomeAndEmailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeAndEmailInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeAndEmailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
