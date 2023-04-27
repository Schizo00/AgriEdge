import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillMenuComponent } from './pill-menu.component';

describe('PillMenuComponent', () => {
  let component: PillMenuComponent;
  let fixture: ComponentFixture<PillMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
