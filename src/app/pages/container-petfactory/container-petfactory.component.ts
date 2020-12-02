import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-petfactory',
  templateUrl: './container-petfactory.component.html',
  styleUrls: ['./container-petfactory.component.scss']
})
export class ContainerPetfactoryComponent implements OnInit {
  pet: {
    id: number;
    category: {
      id: number;
      name: string;
    };
    name: string;
    photoUrls: string[];
    tags: [
      {
        id: number;
        name: string;
      }
    ];
    status: string;
  };

  constructor() {
    const currentTimeStamp = Math.floor(Date.now() / 1000);
    this.pet = {
      id: currentTimeStamp,
      category: {
        id: 0,
        name: ''
      },
      name: '',
      photoUrls: [],
      tags: [
        {
          id: 0,
          name: ''
        }
      ],
      status: 'available'
    };
  }

  ngOnInit(): void {}
}
