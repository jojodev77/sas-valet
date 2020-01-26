import { Component, OnInit } from '@angular/core';
import { Affaire } from '../models/affaire.models';

@Component({
  selector: 'app-affaire-listing',
  templateUrl: './affaire-listing.component.html',
  styleUrls: ['./affaire-listing.component.scss']
})
export class AffaireListingComponent implements OnInit {

  displayedColumns: string[] = ['affairClientLabel', 'affairCode', 'affairShema', 'affairCreateDate', 'affairToDelivreDate',
  'affairToDelivreDate', 'affairNumberToCreate', 'affairNumberDelivred', 'affairValidator', 'close'];
  dataSource: Affaire[];

  constructor() { }

  ngOnInit() {
  }

}
