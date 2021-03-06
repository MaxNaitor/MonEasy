import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Utente } from '../models/utente.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-accesso-registrazione',
  templateUrl: './accesso-registrazione.component.html',
  styleUrls: ['./accesso-registrazione.component.css']
})
export class AccessoRegistrazioneComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private loginService: LoginService) { }

  route: string;

  form: FormGroup;
  utente: Utente;


  ngOnInit(): void {
    this.route = this.activatedRoute.snapshot.url[0].path
    this.form = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'conferma': new FormControl(null, this.route === 'registrazione' ? Validators.required : null)
    })
  }

  registra() {
    this.setUtente()
    if (this.utente.password === this.form.get('conferma').value) {
      this.loginService.registra(this.utente)
    } else {
      Swal.fire('Attenzione!','Le password inserite non combaciano!','error')
      this.form.get('conferma').reset()
    }
  }

  accedi() {
    this.setUtente()
    this.loginService.accedi(this.utente)
  }

  setUtente() {
    this.utente = {
      _id: null,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
  }

}
