import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPetListComponent } from './container-pet-list.component';

describe('ContainerPetListComponent', () => {
  let component: ContainerPetListComponent;
  let fixture: ComponentFixture<ContainerPetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
