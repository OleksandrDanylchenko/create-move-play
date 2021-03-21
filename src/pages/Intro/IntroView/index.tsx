import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import IntroInstallPromp from '../components/IntroInstallPrompt';

const IntroView: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <article className={styles.info}>
        <header className={styles.header}>
          <h1>
            Створюй.
            <br />
            Рухайся.
            <br />
            Грай.
          </h1>
        </header>
        <section className={styles.section}>
          <p>
            Приєднуйся до нас,
            <br />
            виконуй вправи та вигравай цінні призи
          </p>
        </section>
        <Link to={'/questionnaire'} className={styles.questionnaireButtonLink}>
          <button className={styles.questionnaireButton}>
            Пройти опитування
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </Link>
        <IntroInstallPromp />
      </article>
    </div>
  );
};

export default IntroView;
