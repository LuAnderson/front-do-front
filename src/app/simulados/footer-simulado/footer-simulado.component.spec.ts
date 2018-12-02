import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSimuladoComponent } from './footer-simulado.component';

describe('FooterSimuladoComponent', () => {
  let component: FooterSimuladoComponent;
  let fixture: ComponentFixture<FooterSimuladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSimuladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
