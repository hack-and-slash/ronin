import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import Checkbox from './Fields/Checkbox';
import styles from './NpcCard.module.css';

const NpcCard = ({ className, isVillain, id }) => (
  <fieldset className={className || styles.npcCard}>
    <div className={styles.npcCardField}>
      <label>Nome:</label>
      <Field name={`npc-nome-${id}`} component="input" className={styles.npcCardInput} />
    </div>
    <div className={styles.npcCardField}>
      <label>Aparência:</label>
      <Field name={`npc-aparencia-${id}`} component="input" className={styles.npcCardInput} />
    </div>
    <div className={styles.npcCardField}>
      <label>Técnica:</label>
      <Field name={`npc-tecnica-${id}`} component="input" className={styles.npcCardInput} />
    </div>

    {!isVillain && (
      <div className={styles.npcCardField}>
        <label>Ocupação:</label>
        <Field name={`npc-ocupacao-${id}`} component="input" className={styles.npcCardInput} />
      </div>
    )}

    {isVillain && (
      <>
      <div className={styles.npcCardField}>
        <label>Combate:</label>
        <Field name={`npc-combate-${id}`} component="input" className={styles.npcCardInput} />
      </div>
      <div className={styles.npcCardField}>
        <label>Bloqueio:</label>
        <Field name={`npc-bloqueio-${id}`} component="input" className={styles.npcCardInput} />
      </div>
      </>
    )}

    <div className={styles.npcCardField}>
      <label>Histórico:</label>
      <Field name={`npc-historico-${id}`} component="textarea" className={styles.npcCardInput} />
    </div>

    <div className={styles.npcCardFooter}>
      {!isVillain && (
        <label>
          <Checkbox name={`npc-aliado-${id}`} type="checkbox" value="1" />
          <span>Aliado</span>
        </label>
      )}
      {isVillain && (
        <label>
          <Checkbox name={`npc-derrotado-${id}`} type="checkbox" value="1" />
          <span>Derrotado</span>
        </label>
      )}
      <label>
        <span>Morto</span>
        <Checkbox name={`npc-morto-${id}`} type="checkbox" value="1" />
      </label>
    </div>
  </fieldset>
);

NpcCard.propTypes = {
  className: PropTypes.string,
  isVillain: PropTypes.bool,
  id: PropTypes.string,
};

export default NpcCard;
