import React from 'react';

import { Field } from 'react-final-form';

import Checkbox from './Fields/Checkbox';

import styles from './NpcCard.module.css';

const NpcCard = ({ className }) => (
  <fieldset className={className || styles.npcCard}>
    <div className={styles.npcCardField}>
      <label>Nome:</label>
      <Field name="npc-nome" component="input" className={styles.npcCardInput} />
    </div>
    <div className={styles.npcCardField}>
      <label>Aparência:</label>
      <Field name="npc-aparencia" component="input" className={styles.npcCardInput} />
    </div>
    <div className={styles.npcCardField}>
      <label>Técnica:</label>
      <Field name="npc-tecnica" component="input" className={styles.npcCardInput} />
    </div>
    <div className={styles.npcCardField}>
      <label>Ocupação:</label>
      <Field name="npc-appearence" component="input" className={styles.npcCardInput} />
    </div>
    <div className={styles.npcCardField}>
      <label>Histórico:</label>
      <Field name="npc-historico" component="input" className={styles.npcCardInput} />
    </div>

    <div className={styles.npcCardFooter}>
      <label>
        <Checkbox name="npc-aliado" type="checkbox" value="1" />
        <span>Aliado</span>
      </label>
      <label>
        <span>Morto</span>
        <Checkbox name="npc-morto" type="checkbox" value="1" />
      </label>
    </div>
  </fieldset>
);

export default NpcCard;
