import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  birthdate: Date = new Date("2003-11-30");
  yearsOld: number | Date = 0;
  
  ngOnInit(): void {
    const today = new Date();
    this.yearsOld =  today.getFullYear() - this.birthdate.getFullYear() - 1 ;
  }
}
