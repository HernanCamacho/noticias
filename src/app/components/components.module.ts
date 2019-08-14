import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaDetailsComponent } from './noticia-details/noticia-details.component';



@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaComponent,
    NoticiaDetailsComponent
  ],
  exports: [
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
