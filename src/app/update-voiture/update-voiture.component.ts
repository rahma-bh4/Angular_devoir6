import { Component,OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles: ``
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture=new Voiture();
  marques!:Marque[];
  updatedMarId!:number;
  myForm!:FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
       private voitureService:VoitureService,
       private router :Router,
       private formBuilder:FormBuilder){

       }
       ngOnInit()
       {
        this.marques = this.voitureService.listeMarques(); 
        this.myForm=this.formBuilder.group({
          idVoiture:['',[Validators.required]],
          email:['',[Validators.required,Validators.email]],
         nomVoiture:['',[Validators.required,Validators.minLength(5)]],
         prixVoiture:['',[Validators.required]],
         dateCreation:['',[Validators.required]],
         marque:['',[Validators.required]]
        });
          
this.currentVoiture =
this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']);
this.updatedMarId=this.currentVoiture.marque.idMarque;

       }
       updateVoiture() {
        this.currentVoiture.marque=this.voitureService.consulterMarque(this.updatedMarId);
        this.voitureService.updateVoiture(this.currentVoiture);
        this.router.navigate(['voitures']);
        }
  
}
