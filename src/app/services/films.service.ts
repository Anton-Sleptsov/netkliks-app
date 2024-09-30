import { Injectable } from '@angular/core';
import Film from '../models/film.model';
import { FILMS } from '../constants/films.constants';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private _films: Film[] = FILMS;
  private _searchString: string = '';

  constructor() {}

  public get getFullFilms(): Film[] {
    return this._films;
  }

  public get getFilteredFilms(): Film[] {
    const userInput = this._searchString.toLowerCase();

    const filteredArray = this._films.filter(film => film.title.toLowerCase().includes(userInput) || film.originalTitle.toLowerCase().includes(userInput))

    return filteredArray;
  }

  public get getSearchString(): string {
    return this._searchString;
  }

  public set setSearchString(value: string) {
    this._searchString = value;
  }
}
