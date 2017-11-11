import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsopenComponent } from './bidsopen.component';

describe('BidsopenComponent', () => {
  let component: BidsopenComponent;
  let fixture: ComponentFixture<BidsopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
