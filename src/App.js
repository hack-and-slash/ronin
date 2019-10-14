import React from 'react';
import { Form } from 'react-final-form';

import CharacterFields from 'components/CharacterFields';
import ClanFields from 'components/ClanFields';
import AlliesFields from 'components/AlliesFields';
import EnemiesFields from 'components/EnemiesFields';
import VillainsFields from 'components/VillainsFields';

import styles from './App.module.css';

import localStorage from './localStorage';

export const resetFields = (form) =>
  () => {
    const EMPTY_FORM_VALUES = {};
    form.initialize(EMPTY_FORM_VALUES);
  };

function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      initialValues={localStorage.getFormValues()}
      render={({ handleSubmit, values, form }) => {
        localStorage.setFormValues(values);

        return (
          <form onSubmit={handleSubmit} style={{display: 'flex'}}>
            <section className={styles.formWrapper}>
              <input type="button" onClick={resetFields(form)} value="limpar" />
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
        )
      } }
    />
  );
}

export default App;
