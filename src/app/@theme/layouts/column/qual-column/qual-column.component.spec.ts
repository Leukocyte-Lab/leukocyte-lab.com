import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QualColumnComponent } from './qual-column.component';

describe('QualColumnComponent', () => {
  let component: QualColumnComponent;
  let fixture: ComponentFixture<QualColumnComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [QualColumnComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QualColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
