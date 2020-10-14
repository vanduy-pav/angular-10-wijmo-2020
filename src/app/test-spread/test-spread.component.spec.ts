import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSpreadComponent } from './test-spread.component';

describe('TestSpreadComponent', () => {
  let component: TestSpreadComponent;
  let fixture: ComponentFixture<TestSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSpreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
