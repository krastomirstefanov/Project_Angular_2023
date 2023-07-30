import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentClotheComponent } from './current-clothe.component';

describe('CurrentClotheComponent', () => {
  let component: CurrentClotheComponent;
  let fixture: ComponentFixture<CurrentClotheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentClotheComponent]
    });
    fixture = TestBed.createComponent(CurrentClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
