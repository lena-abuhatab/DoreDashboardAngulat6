import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFilterItemComponent } from './r-filter-item.component';

describe('RFilterItemComponent', () => {
  let component: RFilterItemComponent;
  let fixture: ComponentFixture<RFilterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFilterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
