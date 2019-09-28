import React from 'react';
import { Form } from 'react-final-form';

import CharacterFields from 'components/CharacterFields';
import ClanFields from 'components/ClanFields';
import AlliesFields from 'components/AlliesFields';

import styles from './App.module.css';

function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <section className={styles.formWrapper}>
            <div className={styles.firstRow}>
              <CharacterFields />
              <ClanFields />
            </div>
            <AlliesFields />
          </section>
        </form>
      )}
    />
  );
}

export default App;
