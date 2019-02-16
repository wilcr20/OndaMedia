import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(  private storage: Storage) {
    this.getAutomaticValue();
   }

  public automatic:boolean; // Flag Reproduccion automatica

   getAutomaticValue(){
    this.storage.get('automatic').then((val) => {
      this.automatic= val;

      if(this.automatic == null){ // Si es primera vez y no existe 
        this.storage.set('automatic', false); // Se genera false, osea desactivado 
      }

    });
  }

  setAutomaticValue(){
    let newAuto = !this.automatic;  // Se coloca el inverso al mover switch
    this.automatic = newAuto;
    this.storage.set('automatic', newAuto);    
  }

}
 