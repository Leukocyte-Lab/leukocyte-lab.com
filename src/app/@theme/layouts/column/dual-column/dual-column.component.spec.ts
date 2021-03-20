import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DualColumnComponent } from './dual-column.component';

describe('DualColumnComponent', () => {
  let component: DualColumnComponent;
  let fixture: ComponentFixture<DualColumnComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DualColumnComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DualColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
