import React from 'react';
import { Form } from 'react-final-form';

import CharacterFields from 'components/CharacterFields';
import ClanFields from 'components/ClanFields';
import AlliesFields from 'components/AlliesFields';
import EnemiesFields from 'components/EnemiesFields';
import VillainsFields from 'components/VillainsFields';

import styles from './App.module.css';

function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} style={{display: 'flex'}}>
          <section className={styles.formWrapper}>
            <div className={styles.firstRow}>
              <CharacterFields />
              <ClanFields />
            </div>
            <div className={styles.firstRow}>
              <AlliesFields />
              <EnemiesFields />
            </div>
          </section>
          <section style={{width: '25%', paddingLeft: 40}}>
            <VillainsFields />
          </section>
        </form>
      )}
    />
  );
}

export default App;
