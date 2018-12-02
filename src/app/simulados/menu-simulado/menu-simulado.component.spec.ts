import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSimuladoComponent } from './menu-simulado.component';

describe('MenuSimuladoComponent', () => {
  let component: MenuSimuladoComponent;
  let fixture: ComponentFixture<MenuSimuladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSimuladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
