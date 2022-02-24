import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaValoracionComponent } from './receta-valoracion.component';

describe('RecetaValoracionComponent', () => {
  let component: RecetaValoracionComponent;
  let fixture: ComponentFixture<RecetaValoracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaValoracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
