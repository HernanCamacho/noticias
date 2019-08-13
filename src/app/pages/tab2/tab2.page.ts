import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment, IonContent } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {static: false}) segment: IonSegment;
  @ViewChild(IonContent, {static: false}) content: IonContent;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article [] = [];

  constructor( private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias(this.categorias[0]);
  }

  cambioCategoria(event) {
    this.noticias = [];
    console.log(event.detail.value);
    this.cargarNoticias(event.detail.value);
    this.content.scrollToTop();
  }

  cargarNoticias(categoria: string, event?) {
    this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(resp => {
      // console.log(resp);
      if (resp.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.noticias.push(...resp.articles);
      if (event) {
        event.target.complete();
      }
    });
  }

  loadData(event) {
    this.cargarNoticias(this.segment.value, event);
  }

}
