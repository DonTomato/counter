import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdPageComponent } from './pwd-page.component';

describe('PwdPageComponent', () => {
  let component: PwdPageComponent;
  let fixture: ComponentFixture<PwdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
