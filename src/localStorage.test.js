import { setFormValues, getFormValues, initialValues } from './localStorage';

beforeEach(localStorage.clear);
beforeEach(localStorage.getItem.mockClear);
beforeEach(localStorage.setItem.mockClear);

describe('getFormValues', () => {
  it('expect to load from to localStorage', () => {
    localStorage.setItem('form_values', '{ "biru": "laibe" }');

    const result = getFormValues();
    expect(result).toStrictEqual({ biru: 'laibe' });
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('expect initial values if the object is empty', () => {
    localStorage.setItem('form_values', '{}');

    const result = getFormValues();
    expect(result).toStrictEqual(initialValues);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('expect initial values if no value was previously passed', () => {
    const result = getFormValues();
    expect(result).toStrictEqual(initialValues);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

});

describe('setFormValues', () => {
  it('expect to save to localStorage', () => {
    setFormValues({ biru: 'laibe' });

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem('form_values')).toBe('{"biru":"laibe"}');
  });
});
