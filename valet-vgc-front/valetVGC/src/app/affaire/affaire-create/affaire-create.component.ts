import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/** services */
import { AffaireCreateFormulaireService } from '../services/affaire-create-formulaire.service';


/** Models */
import { Affaire } from '../models/affaire.models';

@Component({
  selector: 'app-affaire-create',
  templateUrl: './affaire-create.component.html',
  styleUrls: ['./affaire-create.component.scss']
})
export class AffaireCreateComponent implements OnInit {

  affaireForm: FormGroup;
  srcResult: any;

  constructor(private affaireFormulaireService: AffaireCreateFormulaireService) { }

  ngOnInit() {
    this.affaireForm = this.affaireFormulaireService.buildForm();
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  enregistrerAffaire() {
const data = {
  affairClientLabel: this.affaireForm.get('affairClientLabel').value,
  affairCode: this.affaireForm.get('affairCode').value,
  affairToDelivreDate: this.affaireForm.get('affairToDelivreDate').value,
  affairShema: this.srcResult,
  affairNumberToCreate: this.affaireForm.get('affairNumberToCreate').value,
} as Affaire;
console.log(data);
  }
}
