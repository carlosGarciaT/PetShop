import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-petlist',
  templateUrl: './container-petlist.component.html',
  styleUrls: ['./container-petlist.component.scss']
})
export class ContainerPetlistComponent implements OnInit {
  status: string;

  constructor() {
    this.status = 'available';
  }

  ngOnInit(): void {}
}
