import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreaddashComponent } from './spreaddash.component';

describe('SpreaddashComponent', () => {
  let component: SpreaddashComponent;
  let fixture: ComponentFixture<SpreaddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreaddashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpreaddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
