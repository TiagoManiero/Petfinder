import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPetComponent } from './read-pet.component';

describe('ReadPetComponent', () => {
  let component: ReadPetComponent;
  let fixture: ComponentFixture<ReadPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
