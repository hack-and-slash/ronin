import React from 'react';
import { Field } from 'react-final-form';

import Clan1 from 'images/clans/clan-1.jpg';
import Clan2 from 'images/clans/clan-2.jpg';
import Clan3 from 'images/clans/clan-3.jpg';
import Clan4 from 'images/clans/clan-4.jpg';

import styles from './ClanFields.module.css';

const ClanFields = () =>(
  <section className={styles.clans}>
    <h2 className={styles.clansTitle}>Clãs Influentes</h2>

    <div className={styles.clan}>
      <div className={styles.clanName}>
        <label>Nome:</label>
        <Field name="clan-1-name" component="input" className={styles.clanNameField} />
      </div>
      <Field name="clan-1-description" component="textarea" className={styles.clanDescriptionField} />
      <img src={Clan1} className={styles.clanLogo} alt="Logotipo do clã" />
    </div>

    <div className={styles.clan}>
      <div className={styles.clanName}>
        <label>Nome:</label>
        <Field name="clan-2-name" component="input" className={styles.clanNameField} />
      </div>
      <Field name="clan-2-description" component="textarea" className={styles.clanDescriptionField} />
      <img src={Clan2} className={styles.clanLogo} alt="Logotipo do clã" />
    </div>

    <div className={styles.clan}>
      <div className={styles.clanName}>
        <label>Nome:</label>
        <Field name="clan-3-name" component="input" className={styles.clanNameField} />
      </div>
      <Field name="clan-3-description" component="textarea" className={styles.clanDescriptionField} />
      <img src={Clan3} className={styles.clanLogo} alt="Logotipo do clã" />
    </div>

    <div className={styles.clan}>
      <div className={styles.clanName}>
        <label>Nome:</label>
        <Field name="clan-4-name" component="input" className={styles.clanNameField} />
      </div>
      <Field name="clan-4-description" component="textarea" className={styles.clanDescriptionField} />
      <img src={Clan4} className={styles.clanLogo} alt="Logotipo do clã" />
    </div>
  </section>
);

export default ClanFields;
