import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';

const IntroView: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <article className={styles.info}>
        <header>
          <h1>
            Створюй.
            <br />
            Рухайся.
            <br />
            Грай.
          </h1>
        </header>
        <section>
          <p>
            Приєднуйся до нас,
            <br />
            виконуй вправи та вигравай цінні призи
          </p>
        </section>
      </article>
    </div>
  );
};

export default IntroView;
