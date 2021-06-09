import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  BASE_URL = 'http://localhost:3000/api/'

  registra(utente) {
    this.http.post(this.BASE_URL + 'registrazione', utente).subscribe(res => {
      sessionStorage.setItem('utente', JSON.stringify(res[0]))
      this.router.navigate(['/dashboard'])
    }, error => {
      Swal.fire(
        'Oooops!',
        error.error,
        'error',
      )
    })
  }

  accedi(utente) {
    this.http.post(this.BASE_URL + 'accesso', utente).subscribe(res => {
      sessionStorage.setItem('utente', JSON.stringify(res[0]))
      this.router.navigate(['/dashboard'])
    }, error => {
      Swal.fire(
        'Oooops!',
        error.error,
        'error',
      )
    })
  }
}
