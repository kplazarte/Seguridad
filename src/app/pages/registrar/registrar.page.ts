import { Component, OnInit } from '@angular/core';
import {  FormGroup,
  FormControl,
  Validators,
  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioRegistrar: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRegistrar = this.fb.group({
      nombreP: new FormControl('',Validators.required),
      nombreH: new FormControl('',Validators.required),
      usuario: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
   }
  ngOnInit() {
  }

}
