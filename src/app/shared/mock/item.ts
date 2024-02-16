import { type INeighbouring, type ICountryDetail } from 'src/core/interfaces';

export const neighbouring: INeighbouring[] = [
  {
    flags: {
      png: 'https://flagcdn.com/w320/jp.png',
      svg: 'https://flagcdn.com/jp.svg',
      alt: 'The flag of Japan features a crimson-red circle at the center of a white field.',
    },
    name: {
      common: 'Japan',
      official: 'Japan',
      nativeName: {
        jpn: {
          official: '日本',
          common: '日本',
        },
      },
    },
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/jp.png',
      svg: 'https://flagcdn.com/jp.svg',
      alt: 'The flag of Japan features a crimson-red circle at the center of a white field.',
    },
    name: {
      common: 'Japan',
      official: 'Japan',
      nativeName: {
        jpn: {
          official: '日本',
          common: '日本',
        },
      },
    },
  },
];

export const country: ICountryDetail = {
  flags: {
    png: 'https://flagcdn.com/w320/mx.png',
    svg: 'https://flagcdn.com/mx.svg',
    alt: 'The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.',
  },
  name: {
    common: 'Mexico',
    official: 'United Mexican States',
    nativeName: {
      spa: {
        official: 'Estados Unidos Mexicanos',
        common: 'México',
      },
    },
  },
  independent: true,
  unMember: true,
  currencies: {
    MXN: {
      name: 'Mexican peso',
      symbol: '$',
    },
  },
  capital: ['Mexico City'],
  region: 'Americas',
  subregion: 'North America',
  languages: {
    spa: 'Spanish',
  },
  borders: ['BLZ', 'GTM', 'USA'],
  area: 1964375.0,
  population: 128932753,
  neighbouring: neighbouring,
};
