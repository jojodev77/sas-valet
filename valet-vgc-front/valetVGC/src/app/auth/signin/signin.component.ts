import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


/** services */
import { AuthFormulaireService } from '../services/auth-formulaire.service';
import { SigninService } from '../services/signin.service';
import { ModalService } from 'src/app/angular-material/services/modal.service';


/*** rxjs */
import { Subscription, Subject, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { retry, take, isEmpty, defaultIfEmpty } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authForm: FormGroup;
  authServiceSubscription: Subscription;
  userSubscription: Subscription;
  tokenResponse: any;
  user: any;
  INFO: any;

  constructor(private authFormulaire: AuthFormulaireService, private signinService: SigninService,
              private modalService: ModalService, private router: Router) { }

  ngOnInit() {
    this.authForm = this.authFormulaire.buildForm();
  }

  login() {
    const user = {
      username: this.authForm.get('lastName').value,
      password: this.authForm.get('password').value
    };
    this.authServiceSubscription = this.signinService.login(user).pipe(
      defaultIfEmpty(true),
      retry(1),
    ).subscribe(
      data => this.tokenResponse = data,
    );


    if (this.tokenResponse === true) {
      this.modalService.openInfoModalsFailled('CONNEXION APPROUVER');
      this.router.navigate(['/affaire']);
    }

    if (this.tokenResponse === false) {
      this.modalService.openInfoModalsFailled('ECHEC');
    }
  }

}
