import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultirowResizeComponent } from './multirow-resize.component';

describe('MultirowResizeComponent', () => {
  let component: MultirowResizeComponent;
  let fixture: ComponentFixture<MultirowResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultirowResizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultirowResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
