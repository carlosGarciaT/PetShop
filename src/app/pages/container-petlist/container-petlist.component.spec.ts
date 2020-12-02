import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPetlistComponent } from './container-petlist.component';

describe('ContainerPetlistComponent', () => {
  let component: ContainerPetlistComponent;
  let fixture: ComponentFixture<ContainerPetlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerPetlistComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
