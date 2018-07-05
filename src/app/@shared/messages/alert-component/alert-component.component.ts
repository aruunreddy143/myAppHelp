import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {
  @Input() msg: String;
  constructor() { }

  ngOnInit() {
  }

}
