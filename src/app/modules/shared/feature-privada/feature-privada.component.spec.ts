import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePrivadaComponent } from './feature-privada.component';

describe('FeaturePrivadaComponent', () => {
  let component: FeaturePrivadaComponent;
  let fixture: ComponentFixture<FeaturePrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePrivadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
