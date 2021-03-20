import { CSSObject } from '@emotion/serialize';

export const reactSelectorStyles = {
  control: (base: CSSObject) => ({
    ...base,
    marginBottom: '-8px',
    background: 'transparent',
    border: 'none',
    boxShadow: 'none'
  }),
  indicatorSeparator: () => ({
    background: 'transparent'
  }),
  clearIndicator: () => ({
    marginRight: '12px',
    color: '#E4572E'
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
  }),
  multiValue: (base: CSSObject) => ({
    ...base,
    backgroundColor: '#00C4FF'
  }),
  multiValueRemove: (base: CSSObject) => ({
    ...base,
    marginBottom: '-3px',
    color: '#E4572E'
  })
};
