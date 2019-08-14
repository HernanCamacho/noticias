import { Component, Input } from '@angular/core';
import { Article } from 'src/app/pages/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {

  @Input() noticia: Article;
  @Input() i: number;
  @Input() enFavoritos;
  details = false;

  constructor( private inAppBrowserService: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               private socialSharing: SocialSharing,
               private dataLocalService: DataLocalService) { }

 async lanzarMenu() {
   let borrarBtn;

   if ( this.enFavoritos ) {
     borrarBtn = {
       text: 'Quitar de favoritos',
       icon: 'trash',
       cssClass: 'action-dark',
       handler: () => {
         console.log('Borrar de favorito');
         this.dataLocalService.borrarNoticia( this.noticia );
       }
     };
   } else {
     borrarBtn = {
       text: 'Favorito',
       icon: 'star',
       cssClass: 'action-dark',
       handler: () => {
         console.log('Favorito');
         this.dataLocalService.guardarNoticia( this.noticia );
       }
     };
   }

   const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              '',
              this.noticia.url
            );
          }
        },
        borrarBtn,
        {
          text: 'Cancelar',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
      }]
    });
    await actionSheet.present();
 }

 viewDetails() {
   if ( this.details ) {
     this.details = false;
   } else {
     this.details = true;
   }
 }

}
