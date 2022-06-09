import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGridComponent } from './videos-grid.component';

describe('VideosGridComponent', () => {
  let component: VideosGridComponent;
  let fixture: ComponentFixture<VideosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
