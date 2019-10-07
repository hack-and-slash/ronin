const FIELD_KEY = 'form_values';

export const getFormValues = () =>
  JSON.parse( localStorage.getItem(FIELD_KEY) || '{}' );

export const setFormValues = (object) =>
  localStorage.setItem( FIELD_KEY, JSON.stringify(object) );

export default {
  getFormValues,
  setFormValues,
};
