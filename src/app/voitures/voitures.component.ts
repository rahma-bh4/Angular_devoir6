import { Component , OnInit} from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
  
})
export class VoituresComponent implements OnInit {
  voitures ?: Voiture[];
  constructor(private voitureService: VoitureService ) { 
    
}
ngOnInit(): void {

  this.chargerVoitures();
}

chargerVoitures(){
  this.voitureService.listeVoitures().subscribe(prods => {
    console.log(prods);
    this.voitures = prods;
    });
}
supprimerVoiture(v: Voiture) 
   { 
    let conf = confirm("Etes-vous sûr ?"); 
         if (conf) 
      this.voitureService.supprimerVoiture(v); 
   } 
}
