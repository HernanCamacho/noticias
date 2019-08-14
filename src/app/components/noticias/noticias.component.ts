import { Component, Input } from '@angular/core';
import { Article } from 'src/app/pages/interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent {

  @Input() noticias: Article;
  @Input() enFavoritos = false;

  constructor() { }

}
