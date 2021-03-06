import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { IBindingCallback1 } from '../../../models/callbacks';
import QuestionnaireFormView from '../components/QuestionnaireForm';
import { IUserAnswers } from '../../../redux/reducers/user';

interface QuestionnaireView {
  onSubmit: IBindingCallback1<IUserAnswers>;
}

type QuestionnaireViewProps = QuestionnaireView;

const QuestionnaireView: FunctionComponent<QuestionnaireViewProps> = ({
  onSubmit
}) => {
  return (
    <div className={styles.container}>
      <article className={styles.info}>
        <header className={styles.header}>
          <h1>Пройдіть коротке опитування:</h1>
        </header>
        <section>
          <QuestionnaireFormView onSubmit={onSubmit} />
        </section>
      </article>
    </div>
  );
};

export default QuestionnaireView;
