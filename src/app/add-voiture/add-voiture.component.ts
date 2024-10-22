import { Component,OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
  
})
export class AddVoitureComponent implements OnInit {
  newVoiture= new Voiture(); 
  marques!:Marque[]
  newIdMarque!:number;
  newMarque!:Marque;
  myForm!:FormGroup;
  constructor(private voitureService: VoitureService,
    private router :Router,
    private formBuilder:FormBuilder){   } 
  ngOnInit(): void {
    
    this.marques = this.voitureService.listeMarques(); 
    this.myForm=this.formBuilder.group({
      idVoiture:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
     nomVoiture:['',[Validators.required,Validators.minLength(5)]],
     prixVoiture:['',[Validators.required]],
     dateCreation:['',[Validators.required]],
     marque:['',[Validators.required]]
    });
    
  }
    addVoiture()
    {
      this.newMarque =
this.voitureService.consulterMarque(this.newIdMarque);
this.newVoiture.marque= this.newMarque;
this.voitureService.ajouterVoiture(this.newVoiture);
this.router.navigate(['voitures']);

      
    }
}
