import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  status: string;

  constructor() {
    this.status = 'available';
   }

  ngOnInit(): void {
  }

  cambioStatus(): void{

  }

}
