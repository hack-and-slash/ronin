import React from 'react';
import { Field } from 'react-final-form';

import Checkbox from './Fields/Checkbox';
import TextInput from './Fields/TextInput';

import styles from './CharacterFields.module.css';

const CharacterFields = () => (
  <>
  <div className={styles.fields}>
    <TextInput label="Nome:" name="nome" />
    <TextInput label="Aparência:" name="aparencia" />
    <TextInput label="Técnica:" name="tecnica" />
    <TextInput label="Combate:" name="combate" />
    <TextInput label="Bloqueio:" name="bloqueio" />
    <TextInput label="Família:" name="familia" />
    <TextInput label="Pesadelo:" name="pesadelo" />
    <TextInput label="Cicatriz:" name="cicatriz" />
    <TextInput label="Significado:" name="significado" />
  </div>
  <div>
    <label>Histórico</label>
    <Field name="historico" component="textarea" />
  </div>
  <div>
    <label>Reputação</label>
    <Checkbox name="reputacao" type="checkbox" value="1" />
    <Checkbox name="reputacao" type="checkbox" value="2" />
    <Checkbox name="reputacao" type="checkbox" value="3" />
    <Checkbox name="reputacao" type="checkbox" value="4" />
    <Checkbox name="reputacao" type="checkbox" value="5" />
    <Checkbox name="reputacao" type="checkbox" value="6" />
  </div>
  <div>
    <label>Compaixão</label>
    <Checkbox name="compaixao" type="checkbox" value="1" />
    <Checkbox name="compaixao" type="checkbox" value="2" />
    <Checkbox name="compaixao" type="checkbox" value="3" />
    <Checkbox name="compaixao" type="checkbox" value="4" />
    <Checkbox name="compaixao" type="checkbox" value="5" />
    <Checkbox name="compaixao" type="checkbox" value="6" />
  </div>
  <div>
    <label>Determinação</label>
    <Checkbox name="determinacao" type="checkbox" value="1" />
    <Checkbox name="determinacao" type="checkbox" value="2" />
    <Checkbox name="determinacao" type="checkbox" value="3" />
    <Checkbox name="determinacao" type="checkbox" value="4" />
    <Checkbox name="determinacao" type="checkbox" value="5" />
    <Checkbox name="determinacao" type="checkbox" value="6" />
  </div>
  </>
);

export default CharacterFields;
