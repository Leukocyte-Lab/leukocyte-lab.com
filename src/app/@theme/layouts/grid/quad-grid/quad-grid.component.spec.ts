import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuadGridComponent } from './quad-grid.component';

describe('QuadGridComponent', () => {
  let component: QuadGridComponent;
  let fixture: ComponentFixture<QuadGridComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [QuadGridComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
