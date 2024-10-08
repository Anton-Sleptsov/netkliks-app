import Film from '../models/film.model';

export const FILMS: Film[] = [
  {
    id: 0,
    title: 'Марсианин',
    originalTitle: 'The Martian',
    year: '2015',
    categories: 'Фантастика, приключения',
    rate: 7.8,
    image: '/images/film-image.png',
  },
  {
    id: 1,
    title: 'Гравитация',
    originalTitle: 'Gravity',
    year: '2013',
    categories: 'Фантастика, драма',
    rate: 7.7,
    image: '/images/film-image.png',
  },
  {
    id: 2,
    title: 'Интерстеллар',
    originalTitle: 'Interstellar',
    year: '2014',
    categories: 'Фантастика',
    rate: 8.6,
    image: '/images/film-image.png',
  },
  {
    id: 3,
    title: 'Пекло',
    originalTitle: 'Sunshine',
    year: '2007',
    categories: 'Фантастика',
    rate: 7.2,
    image: '/images/film-image.png',
  },
  {
    id: 4,
    title: 'Армагеддон',
    originalTitle: 'Armageddon',
    year: '1998',
    categories: 'Катастрофа, боевик',
    rate: 7.0,
    image: '/images/film-image.png',
  },
  {
    id: 5,
    title: 'Послезавтра',
    originalTitle: 'The Day After Tomorrow',
    year: '2004',
    categories: 'Катастрофа',
    rate: 6.4,
    image: '/images/film-image.png',
  },
];
