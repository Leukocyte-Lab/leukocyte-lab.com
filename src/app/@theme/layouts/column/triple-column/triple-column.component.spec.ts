import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TripleColumnComponent } from './triple-column.component';

describe('TripleColumnComponent', () => {
  let component: TripleColumnComponent;
  let fixture: ComponentFixture<TripleColumnComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TripleColumnComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
