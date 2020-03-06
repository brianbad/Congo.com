import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWriteReviewComponent } from './dialog-write-review.component';

describe('DialogWriteReviewComponent', () => {
  let component: DialogWriteReviewComponent;
  let fixture: ComponentFixture<DialogWriteReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWriteReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWriteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
