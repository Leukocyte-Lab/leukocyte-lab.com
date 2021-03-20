import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[lkc-dual-column]',
  templateUrl: './dual-column.component.html',
  styleUrls: ['./dual-column.component.scss']
})
export class DualColumnComponent implements OnInit {
  @Input() columns = '1fr 1fr';

  constructor() {}

  ngOnInit(): void {}
}
