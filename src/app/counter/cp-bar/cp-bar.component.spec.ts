import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpBarComponent } from './cp-bar.component';

describe('CpBarComponent', () => {
  let component: CpBarComponent;
  let fixture: ComponentFixture<CpBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
