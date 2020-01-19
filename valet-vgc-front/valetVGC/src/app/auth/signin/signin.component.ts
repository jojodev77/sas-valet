import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


/** services */
import { AuthFormulaireService } from '../services/auth-formulaire.service';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

authForm: FormGroup;

  constructor(private authFormulaire: AuthFormulaireService, private signinService: SigninService) { }

  ngOnInit() {
    this.authForm = this.authFormulaire.buildForm();
  }

  login() {
    const user = {
    username: this.authForm.get('lastName').value,
    password: this.authForm.get('password').value
    };
    this.signinService.login(user);
  }

}
