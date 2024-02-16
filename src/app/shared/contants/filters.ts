export type TOption = {
  label: string;
  value: string;
};

export const sortOptions: TOption[] = [
  { value: 'population', label: 'Population' },
  { value: 'name', label: 'Name' },
  { value: 'area', label: 'Area (km2)' },
];

export const regions: TOption[] = [
  { value: 'americas', label: 'Americas' },
  { value: 'antarctic', label: 'Antarctic' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

export const status: TOption[] = [
  { label: 'Member of the United Nations', value: 'unMember' },
  { label: 'Independent', value: 'independent' },
];
