import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public automatic:boolean; // Flag Reproduccion automatica

  
  constructor(  private storage: Storage) {
    this.getAutomaticValue();
   }


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

  doRefresh(event) {
    setTimeout(() => {
      console.log('Ready refresh');
      location.reload();  //Refresh page
      event.target.complete();
    }, 400); //Time to call reload 0.4 sec
  }



}
 