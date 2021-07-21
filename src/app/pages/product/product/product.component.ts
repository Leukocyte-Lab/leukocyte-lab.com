import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: '[lkc-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  spotlightPosition: {
    x: number,
    y: number
  } = {
    x: 0,
    y: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  mousemoveHandler(event: MouseEvent): void {
    this.spotlightPosition.x = event.clientX;
    this.spotlightPosition.y = event.clientY + 64;
  }
}
