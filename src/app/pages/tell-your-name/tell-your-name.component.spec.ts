import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellYourNameComponent } from './tell-your-name.component';

describe('TellYourNameComponent', () => {
  let component: TellYourNameComponent;
  let fixture: ComponentFixture<TellYourNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellYourNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TellYourNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
