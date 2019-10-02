import React from 'react';

import NpcCard from './NpcCard';
import styles from './AlliesFields.module.css';

const allies = Array(6).fill();

const AlliesFields = () => (
  <section className={styles.alliesFieldsWrapper}>
    <h2 className={styles.alliesFieldsTitle}>Possíveis aliados</h2>
    <div className={styles.alliesFields}>
      {allies.map((ally, index) => (
        <NpcCard className={styles.allyCard} key={`ally-${index}`} id={`ally-${index}`} />
      ))}
    </div>
  </section>
);

export default AlliesFields;
