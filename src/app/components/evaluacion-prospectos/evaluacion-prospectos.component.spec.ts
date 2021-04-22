import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionProspectosComponent } from './evaluacion-prospectos.component';

describe('EvaluacionProspectosComponent', () => {
  let component: EvaluacionProspectosComponent;
  let fixture: ComponentFixture<EvaluacionProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionProspectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
