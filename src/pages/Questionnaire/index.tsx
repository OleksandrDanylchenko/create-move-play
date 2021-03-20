import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const QuestionnaireView: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <article className={styles.info}>
        <header className={styles.header}>
          <h1>Пройдіть коротке опитування:</h1>
        </header>
        <section className={styles.section}>
          <p>
            Приєднуйся до нас,
            <br />
            виконуй вправи та вигравай цінні призи
          </p>
        </section>
        <button className={styles.joinButton}>
          Приєднатися
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </article>
    </div>
  );
};

export default QuestionnaireView;
