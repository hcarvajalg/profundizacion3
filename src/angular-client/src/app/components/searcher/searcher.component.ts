import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() onlogout = new EventEmitter;
  constructor() { }

  categoriaPopular$: object;

  ngOnInit() {
   /* this.data.getCategories().subscribe(
      data => this.categoriaPopular$ = data
    ); */
  }

}
