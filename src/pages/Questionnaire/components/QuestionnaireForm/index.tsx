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
  const preferableDayPeriods = [
    { text: '', value: '' },
    { text: 'Зранку та в обід', value: 'morningAndDinner' },
    { text: 'В обід та ввечері', value: 'dinnerAndSupper' }
  ];

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
            <Field<string>
              name={'preferredDayPeriod'}
              component={'select'}
              options={preferableDayPeriods}
            >
              {({ input, meta, options }) => (
                <div
                  className={
                    meta.error && meta.touched
                      ? styles.formFieldError
                      : styles.formField
                  }
                >
                  <label>Найзручніші періоди для занять</label>
                  <select
                    {...input}
                    onChange={(event) => {
                      meta.error && form.resetFieldState('preferredDayPeriod');
                      input.onChange(event.target.value);
                    }}
                    className={styles.fieldInput}
                  >
                    {options.map((option: { text: string; value: string }) => (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={!option.value}
                      >
                        {option.text}
                      </option>
                    ))}
                  </select>
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
