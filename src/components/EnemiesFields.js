import React from 'react';

import { Field } from 'react-final-form';

import styles from './EnemiesFields.module.css';

const enemies = Array(15).fill();

const Enemy = () => (
  <tr>
    <td className={styles.fieldCell}>
      <Field name="inimigo-name" component="input" className={styles.field} />
    </td>
    <td className={styles.fieldCell}>
      <Field name="inimigo-combat" component="input" className={styles.field} />
    </td>
    <td className={styles.fieldCell}>
      <Field name="inimigo-bloqueios" component="input" className={styles.field} />
    </td>
  </tr>
);

const EnemiesFields = () => (
  <table cellSpacing="0">
    <thead>
      <tr>
        <th className={styles.fieldCell}>Inimigo</th>
        <th className={styles.fieldCell}>Combate</th>
        <th className={styles.fieldCell}>Bloqueios</th>
      </tr>
    </thead>
    <tbody>
      {enemies.map((enemy, index) => <Enemy key={index}/>)}
    </tbody>
  </table>
);

export default EnemiesFields;
