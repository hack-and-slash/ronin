import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import styles from './EnemiesFields.module.css';

const enemies = Array(15).fill();

const Enemy = ({ id }) => (
  <tr>
    <td className={styles.fieldCell}>
      <Field name={`inimigo-name-${id}`} component="input" className={styles.field} />
    </td>
    <td className={styles.fieldCell}>
      <Field name={`inimigo-combate-${id}`} component="input" className={styles.field} />
    </td>
    <td className={styles.fieldCell}>
      <Field name={`inimigo-bloqueios-${id}`} component="input" className={styles.field} />
    </td>
  </tr>
);

Enemy.propTypes = {
  id: PropTypes.number.isRequired,
};

const EnemiesFields = () => (
  <section className={styles.enemiesFields}>
    <h2 className={styles.enemiesFieldsTitle}>Inimigos</h2>
    <table cellSpacing="0">
      <thead>
        <tr>
          <th className={styles.fieldCell}>Inimigo</th>
          <th className={styles.fieldCell}>Combate</th>
          <th className={styles.fieldCell}>Bloqueios</th>
        </tr>
      </thead>
      <tbody>
        {enemies.map((enemy, index) => <Enemy key={index} id={index}/>)}
      </tbody>
    </table>
  </section>
);

export default EnemiesFields;
