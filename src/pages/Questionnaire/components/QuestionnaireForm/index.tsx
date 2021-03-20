import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Field, Form } from 'react-final-form';
import styles from './styles.module.scss';
import { IBindingCallback1 } from '../../../../models/callbacks';
import { IUserData } from '../../QuestionnaireContainer';

interface QuestionnaireForm {
  onSubmit: IBindingCallback1<IUserData>;
}

type QuestionnaireFormProps = QuestionnaireForm;

const QuestionnaireForm: FunctionComponent<QuestionnaireFormProps> = ({
  onSubmit
}) => {
  return (
    <>
      <Form
        onSubmit={onSubmit}
        // validate={(values) => questionnaireValidator(values)}
        render={({
          handleSubmit,
          pristine,
          active,
          hasValidationErrors,
          form
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <label>Ім&apos;я</label>
              <Field
                name={'name'}
                component={'input'}
                type={'text'}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formField}>
              <label>Вік</label>
              <Field
                name={'age'}
                component={'input'}
                type={'number'}
                className={styles.textInput}
              />
            </div>
          </form>
        )}
      />
      <button className={styles.submitButton}>
        Приєднатися
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>
    </>
  );
};

export default QuestionnaireForm;
