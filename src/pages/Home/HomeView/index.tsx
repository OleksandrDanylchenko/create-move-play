import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { IUserAnswers } from '../../../redux/reducers/user';
import ExercisesContainer from '../../Excercises/ExcercisesContainer';
import SettingsButtonMenuView from '../components/SettingsButtonMenu/SettingsButtonMenuView';
import { PromptToInstallProvider } from '../../../hooks/usePromptToInstall';
import InstallPromp from '../../General/InstallPrompt';

interface HomeView {
  userAnswers: IUserAnswers;
}

type HomeViewProps = HomeView;

const HomeView: FunctionComponent<HomeViewProps> = ({ userAnswers }) => {
  return (
    <div className={styles.container}>
      <article className={styles.info}>
        <header className={styles.header}>
          <h1 className={styles.headerGreeting}>
            Привіт, <wbr />
            {userAnswers.name}
          </h1>
          <div className={styles.headerSettings}>
            <SettingsButtonMenuView />
          </div>
        </header>
        <section>
          {/*<PromptToInstallProvider>*/}
          {/*  <div className={styles.installPrompt}>*/}
          {/*    <InstallPromp />*/}
          {/*  </div>*/}
          {/*</PromptToInstallProvider>*/}
          <ExercisesContainer />
        </section>
      </article>
    </div>
  );
};

export default HomeView;
