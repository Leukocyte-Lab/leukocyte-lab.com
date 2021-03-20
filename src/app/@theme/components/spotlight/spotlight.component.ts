import { Component, Input, OnInit } from '@angular/core';

export enum SpotlightType {
  left,
  right
}

@Component({
  selector: '[lkc-spotlight]',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {
  @Input() type!: keyof typeof SpotlightType;

  constructor() { }

  ngOnInit(): void {
  }

}
