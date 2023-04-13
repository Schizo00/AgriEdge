import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantdashComponent } from './plantdash.component';

describe('PlantdashComponent', () => {
  let component: PlantdashComponent;
  let fixture: ComponentFixture<PlantdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
