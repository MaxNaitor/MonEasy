import { Component, OnInit } from '@angular/core';
import { Utente } from '../models/utente.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  utente: Utente;

  ngOnInit(): void {
    this.utente = JSON.parse(sessionStorage.getItem('utente'))
  }

}
