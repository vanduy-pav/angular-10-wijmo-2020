import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManySpreadViewComponent } from './many-spread-view.component';

describe('ManySpreadViewComponent', () => {
  let component: ManySpreadViewComponent;
  let fixture: ComponentFixture<ManySpreadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManySpreadViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManySpreadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
