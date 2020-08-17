import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltraPetComponent } from './filtra-pet.component';

describe('FiltraPetComponent', () => {
  let component: FiltraPetComponent;
  let fixture: ComponentFixture<FiltraPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltraPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltraPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
