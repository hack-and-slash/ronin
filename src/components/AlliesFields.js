import React from 'react';

import NpcCard from './NpcCard';

import styles from './AlliesFields.module.css';

const AlliesFields = () => (
  <section className={styles.alliesFields}>
    <NpcCard className={styles.allyCard} />
    <NpcCard className={styles.allyCard} />
    <NpcCard className={styles.allyCard} />
    <NpcCard className={styles.allyCard} />
    <NpcCard className={styles.allyCard} />
    <NpcCard className={styles.allyCard} />
  </section>
);

export default AlliesFields;
