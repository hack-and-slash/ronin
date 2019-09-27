import React from 'react';
import { Field } from 'react-final-form';

const Checkbox = (props) => (
  <Field {...props}>
    {fieldProps => (
      <input {...fieldProps.input} />
    )}
  </Field>
);

export default Checkbox;
