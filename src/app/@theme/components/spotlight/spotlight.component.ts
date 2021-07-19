import { Component, Input, OnInit } from '@angular/core';

export enum SpotlightType {
  left,
  left_thin,
  right,
  right_thin
}

export enum SpotlightTheme {
  auto,
  light,
  gray,
  dark
}

@Component({
  selector: '[lkc-spotlight]',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {
  @Input() type!: keyof typeof SpotlightType;
  @Input() theme: keyof typeof SpotlightTheme = 'auto';

  constructor() { }

  ngOnInit(): void {
  }

}
