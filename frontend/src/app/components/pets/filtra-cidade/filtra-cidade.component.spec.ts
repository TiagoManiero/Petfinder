import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltraCidadeComponent } from './filtra-cidade.component';

describe('FiltraCidadeComponent', () => {
  let component: FiltraCidadeComponent;
  let fixture: ComponentFixture<FiltraCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltraCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltraCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
