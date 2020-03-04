import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSellItemComponent } from './dialog-sell-item.component';

describe('DialogSellItemComponent', () => {
  let component: DialogSellItemComponent;
  let fixture: ComponentFixture<DialogSellItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSellItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSellItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
