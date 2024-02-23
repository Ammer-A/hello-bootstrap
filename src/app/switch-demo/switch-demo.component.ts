import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
@Component({
  selector: 'app-switch-demo',
  standalone: true,
  imports: [NgSwitch,CommonModule],

  templateUrl: './switch-demo.component.html',
  styleUrls: ['./switch-demo.component.css'],
})
export class SwitchDemoComponent implements OnInit {

  public day = new Date().getDay();

  constructor() { }

  ngOnInit(): void {
  }

}
