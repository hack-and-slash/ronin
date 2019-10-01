import React from 'react';

import NpcCard from './NpcCard';
import styles from './VillainsFields.module.css';

const VillainsFields = () =>(
  <section>
    <h2 className={styles.villainTitle}>Vilão 1</h2>
    <NpcCard isVillain/>
    <h2 className={styles.villainTitle}>Vilão 2</h2>
    <NpcCard isVillain/>
    <h2 className={styles.villainTitle}>Vilão Final</h2>
    <NpcCard isVillain/>
  </section>
);

export default VillainsFields;
