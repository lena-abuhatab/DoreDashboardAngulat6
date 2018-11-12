import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasBannerComponent } from './mas-banner.component';

describe('MasBannerComponent', () => {
  let component: MasBannerComponent;
  let fixture: ComponentFixture<MasBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
