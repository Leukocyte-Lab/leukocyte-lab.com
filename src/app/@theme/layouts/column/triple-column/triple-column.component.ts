import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[lkc-triple-column]',
  templateUrl: './triple-column.component.html',
  styleUrls: ['./triple-column.component.scss']
})
export class TripleColumnComponent implements OnInit {
  @Input() columns = '1fr 1fr 1fr';

  constructor() {}

  ngOnInit(): void {}
}
