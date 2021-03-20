import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { IUserAnswers } from '../../../redux/reducers/user';

interface HomeView {
  userAnswers: IUserAnswers;
}

type HomeViewProps = HomeView;

const HomeView: FunctionComponent<HomeViewProps> = ({ userAnswers }) => {
  return (
    <div className={styles.container}>
      <article className={styles.info}>
        <header className={styles.header}>
          <h1>Пройдіть коротке опитування:</h1>
        </header>
        <section>
          <pre>{JSON.stringify(userAnswers, null, 2)}</pre>
        </section>
      </article>
    </div>
  );
};

export default HomeView;
