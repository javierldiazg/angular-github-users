import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = 'Label';
  @Input() public className: string;
  @Input() public type: string;
  @Input() public disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
