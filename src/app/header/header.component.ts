import { Component, OnInit } from '@angular/core';
import *  as data from '../../assets/menu.json'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menuArray: any = (data as any).default;

  ngOnInit(): void {
  }

}
