import React from 'react';
import { Field } from 'react-final-form';

import Checkbox from './Fields/Checkbox';
import TextInput from './Fields/TextInput';

import styles from './CharacterFields.module.css';

const CharacterFields = () => (
  <section className={styles.characterFields}>
    <div className={styles.backgroundFields}>
      <div className={styles.fields}>
        <TextInput label="Nome:" name="nome" />
        <TextInput label="Aparência:" name="aparencia" />
        <TextInput label="Técnica:" name="tecnica" />
        <TextInput label="Combate:" name="combate" />
        <TextInput label="Bloqueio:" name="bloqueio" />
        <TextInput label="Família:" name="familia" />
        <TextInput label="Cicatriz:" name="cicatriz" />
        <TextInput label="Significado:" name="significado" />
        <TextInput label="Pesadelo:" name="pesadelo" />
      </div>
      <div className={styles.history}>
        <label className={styles.historyLabel}>Histórico</label>
        <Field name="historico" component="textarea" className={styles.historyField} />
      </div>
    </div>
    <div className={styles.checkboxes}>
      <div>
        <label>Reputação:</label>
        <Checkbox name="reputacao" type="checkbox" value="1" />
        <Checkbox name="reputacao" type="checkbox" value="2" />
        <Checkbox name="reputacao" type="checkbox" value="3" />
        <Checkbox name="reputacao" type="checkbox" value="4" />
        <Checkbox name="reputacao" type="checkbox" value="5" />
        <Checkbox name="reputacao" type="checkbox" value="6" />
      </div>
      <div>
        <label>Compaixão:</label>
        <Checkbox name="compaixao" type="checkbox" value="1" />
        <Checkbox name="compaixao" type="checkbox" value="2" />
        <Checkbox name="compaixao" type="checkbox" value="3" />
        <Checkbox name="compaixao" type="checkbox" value="4" />
        <Checkbox name="compaixao" type="checkbox" value="5" />
        <Checkbox name="compaixao" type="checkbox" value="6" />
      </div>
      <div>
        <label>Determinação:</label>
        <Checkbox name="determinacao" type="checkbox" value="1" />
        <Checkbox name="determinacao" type="checkbox" value="2" />
        <Checkbox name="determinacao" type="checkbox" value="3" />
        <Checkbox name="determinacao" type="checkbox" value="4" />
        <Checkbox name="determinacao" type="checkbox" value="5" />
        <Checkbox name="determinacao" type="checkbox" value="6" />
      </div>
    </div>
    <div className={styles.lifeStatus}>
      <label>
        <span>Ferido</span>
        <Checkbox name="ferido" type="checkbox" />
      </label>
      <div className={styles.lifeStatusSeparator} />
      <label>
        <Checkbox name="morto" type="checkbox" />
        <span>Morto</span>
      </label>
    </div>
  </section>
);

export default CharacterFields;
