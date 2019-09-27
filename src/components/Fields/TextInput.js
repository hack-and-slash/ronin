import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import styles from './TextInput.module.css';

const TextInput = ({ label, name }) => (
  <div className={styles.textInput}>
    <label className={styles.label} htmlFor={name}>{label}</label>
    <div className={styles.fieldWrapper}>
      <Field id={name} name={name} component="input" className={styles.field} />
    </div>
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TextInput;
