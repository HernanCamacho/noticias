import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/pages/interfaces/interfaces';

@Component({
  selector: 'app-noticia-details',
  templateUrl: './noticia-details.component.html',
  styleUrls: ['./noticia-details.component.scss'],
})
export class NoticiaDetailsComponent implements OnInit {

  @Input() noticia: Article;

  constructor() { }

  ngOnInit() { }

}
