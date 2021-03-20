import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Field, Form } from 'react-final-form';
import styles from './styles.module.scss';
import { questionnaireValidator } from './questionnaireValidator';
import { IBindingCallback1 } from '../../../../models/callbacks';
import { IUserData } from '../../QuestionnaireContainer';

interface QuestionnaireFormView {
  onSubmit: IBindingCallback1<IUserData>;
}

type QuestionnaireFormProps = QuestionnaireFormView;

const QuestionnaireFormView: FunctionComponent<QuestionnaireFormProps> = ({
  onSubmit
}) => {
  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={(values) => questionnaireValidator(values)}
        render={({
          handleSubmit,
          pristine,
          active,
          hasValidationErrors,
          form
        }) => (
          <form onSubmit={handleSubmit}>
            <Field<string> name={'name'}>
              {({ input, meta }) => (
                <div
                  className={
                    meta.error && meta.touched
                      ? styles.formFieldError
                      : styles.formField
                  }
                >
                  <label className={styles.fieldLabel}>Ім&apos;я</label>
                  <input
                    {...input}
                    type={'text'}
                    onChange={(event) => {
                      meta.error && form.resetFieldState('name');
                      input.onChange(event.target.value);
                    }}
                    className={styles.fieldInput}
                  />
                  {meta.error && meta.touched && (
                    <span className={styles.fieldError}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field<string> name={'age'}>
              {({ input, meta }) => (
                <div
                  className={
                    meta.error && meta.touched
                      ? styles.formFieldError
                      : styles.formField
                  }
                >
                  <label>Вік</label>
                  <input
                    {...input}
                    type={'number'}
                    onChange={(event) => {
                      meta.error && form.resetFieldState('age');
                      input.onChange(event.target.value);
                    }}
                    className={styles.fieldInput}
                  />
                  {meta.error && meta.touched && (
                    <span className={styles.fieldError}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
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

export default QuestionnaireFormView;
