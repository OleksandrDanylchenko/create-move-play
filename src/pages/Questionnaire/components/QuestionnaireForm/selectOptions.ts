export interface ISelectOption {
  label: string;
  value: string;
}

export const preferableDayPeriodsOptions: ISelectOption[] = [
  { label: 'Зранку та в обід', value: 'morningAndDinner' },
  { label: 'В обід та ввечері', value: 'dinnerAndSupper' }
];

export const diseasesOptions: ISelectOption[] = [
  { label: "М'язева дистрофія ніг", value: 'legsDystrophy' },
  { label: 'Артеріальна гіпертензія', value: 'arteriesHypertensia' }
];
