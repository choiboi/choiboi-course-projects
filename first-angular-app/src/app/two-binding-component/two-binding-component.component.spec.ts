import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingComponentComponent } from './two-binding-component.component';

describe('TwoBindingComponentComponent', () => {
  let component: TwoBindingComponentComponent;
  let fixture: ComponentFixture<TwoBindingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoBindingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
