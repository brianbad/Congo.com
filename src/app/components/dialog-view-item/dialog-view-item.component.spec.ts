import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewItemComponent } from './dialog-view-item.component';

describe('DialogViewItemComponent', () => {
  let component: DialogViewItemComponent;
  let fixture: ComponentFixture<DialogViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
