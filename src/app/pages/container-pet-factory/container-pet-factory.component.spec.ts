import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPetFactoryComponent } from './container-pet-factory.component';

describe('ContainerPetFactoryComponent', () => {
  let component: ContainerPetFactoryComponent;
  let fixture: ComponentFixture<ContainerPetFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPetFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPetFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
