import { CSSObject } from '@emotion/serialize';

export const reactSelectorStyles = {
  control: (base: CSSObject) => ({
    ...base,
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    marginBottom: '-8px'
  }),
  indicatorSeparator: () => ({
    background: 'transparent'
  }),
  dropdownIndicator: () => ({
    color: 'black'
  }),
  menu: (base: CSSObject) => ({
    ...base,
    backgroundColor: '#00C4FF',
    width: '94%'
  }),
  option: (base: CSSObject, { isSelected }: { isSelected: boolean }) => ({
    ...base,
    backgroundColor: isSelected ? '#2182F6' : base.backgroundColor
  })
};
