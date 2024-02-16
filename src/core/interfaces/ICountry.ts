export interface ICountry {
  name: Name;
  independent: boolean;
  unMember: boolean;
  region: string;
  subregion: string;
  area: number;
  population: number;
  flags: Flags;
}

interface Currencies {
  name: string;
  symbol: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: Record<string, Translation>;
}

interface Translation {
  official: string;
  common: string;
}

export interface ICountryDetail extends ICountry {
  currencies: Record<string, Currencies>;
  languages: Record<string, string>;
  capital: string[];
  borders: string[];
  neighbouring: INeighbouring[];
}

export interface INeighbouring {
  name: Name;
  flags: Flags;
}
