import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[lkc-qual-column]',
  templateUrl: './qual-column.component.html',
  styleUrls: ['./qual-column.component.scss']
})
export class QualColumnComponent implements OnInit {
  @Input() columns = '1fr 1fr 1fr 1fr';

  constructor() {}

  ngOnInit(): void {}
}
