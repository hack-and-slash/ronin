import React from 'react';

import NpcCard from './NpcCard';
import styles from './AlliesFields.module.css';

const allies = Array(6).fill();

const AlliesFields = () => (
  <section className={styles.alliesFields}>
    {allies.map((ally, index) => (
      <NpcCard className={styles.allyCard} key={`ally-${index}`} id={`ally-${index}`} />
    ))}
  </section>
);

export default AlliesFields;
