import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affaire-container',
  templateUrl: './affaire-container.component.html',
  styleUrls: ['./affaire-container.component.scss']
})
export class AffaireContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  listCommande() {
    this.router.navigate(['/affaireCreate']);
  }

}
