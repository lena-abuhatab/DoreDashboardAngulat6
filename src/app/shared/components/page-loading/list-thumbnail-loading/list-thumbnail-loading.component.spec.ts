import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThumbnailLoadingComponent } from './list-thumbnail-loading.component';

describe('ListThumbnailLoadingComponent', () => {
  let component: ListThumbnailLoadingComponent;
  let fixture: ComponentFixture<ListThumbnailLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThumbnailLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThumbnailLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
