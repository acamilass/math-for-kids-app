import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsDoMathComponent } from './lets-do-math.component';

describe('LetsDoMathComponent', () => {
  let component: LetsDoMathComponent;
  let fixture: ComponentFixture<LetsDoMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsDoMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsDoMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
