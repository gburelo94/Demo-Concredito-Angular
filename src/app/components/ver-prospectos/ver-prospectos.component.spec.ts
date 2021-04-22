import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProspectosComponent } from './ver-prospectos.component';

describe('VerProspectosComponent', () => {
  let component: VerProspectosComponent;
  let fixture: ComponentFixture<VerProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerProspectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
