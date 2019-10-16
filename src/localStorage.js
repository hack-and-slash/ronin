const FIELD_KEY = 'form_values';

export const initialValues = {
  compaixao: ['1', '2'],
  determinacao: ['1', '2']
};

export const getFormValues = () => {
  const storedValues =  JSON.parse(localStorage.getItem(FIELD_KEY) || '{}');
  const isStorageUsed = Object.keys(storedValues).length > 0;

  return isStorageUsed ? storedValues : initialValues;
};

export const setFormValues = (object) =>
  localStorage.setItem( FIELD_KEY, JSON.stringify(object) );

export default {
  getFormValues,
  setFormValues,
  initialValues,
};
