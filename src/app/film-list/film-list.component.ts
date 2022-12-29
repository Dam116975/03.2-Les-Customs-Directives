import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {
  filmList = [
    {
      name: 'aaaaa',
      année: 1900,
      genre: 'horreur',
      urlPicture: '',
    },
    {
      name: 'bbbbbb',
      année: 2000,
      genre: 'comédie',
      urlPicture: '',
    },
    {
      name: 'ccccc',
      année: 3000,
      genre: 'dram',
      urlPicture: '',
    },
  ];

  showMovies = true;

  constructor() {}

  ngOnInit(): void {}

  showHide() {
    this.showMovies = !this.showMovies;
  }
}
