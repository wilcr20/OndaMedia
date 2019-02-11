import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerComponent } from './player/player.component';

@NgModule({

  imports: [IonicModule],
  declarations: [PlayerComponent],
  exports : [PlayerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class ComponentsModule {}

