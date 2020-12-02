import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPetfactoryComponent } from './container-petfactory.component';

describe('ContainerPetfactoryComponent', () => {
  let component: ContainerPetfactoryComponent;
  let fixture: ComponentFixture<ContainerPetfactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerPetfactoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPetfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
