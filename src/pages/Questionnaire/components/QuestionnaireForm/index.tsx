import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Field, Form } from 'react-final-form';
import Select from 'react-select';
import styles from './styles.module.scss';
import { questionnaireValidator } from './questionnaireValidator';
import { IBindingCallback1 } from '../../../../models/callbacks';
import { IUserData } from '../../QuestionnaireContainer';
import { preferableDayPeriodsOptions } from './selectOptions';
import { reactSelectorStyles } from './reactSelectStyles';

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
                  <label className={styles.fieldLabel}>Вік</label>
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
              options={preferableDayPeriodsOptions}
            >
              {({ input, meta, options }) => (
                <div
                  className={
                    meta.error && meta.touched
                      ? styles.formFieldError
                      : styles.formField
                  }
                >
                  <label className={styles.fieldLabel}>
                    Найзручніші періоди для занять
                  </label>
                  <Select
                    placeholder={false}
                    isSearchable={false}
                    onFocus={(event) => input.onFocus(event)}
                    onBlur={(event) => input.onBlur(event)}
                    onChange={(event) => {
                      meta.error && form.resetFieldState('preferredDayPeriod');
                      input.onChange(event?.value);
                    }}
                    options={options}
                    className={styles.fieldInput}
                    styles={reactSelectorStyles}
                  />
                  {meta.error && meta.touched && (
                    <span className={styles.fieldError}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            {/*<Field<string[]>*/}
            {/*  name={'diseases'}*/}
            {/*  component={'select'}*/}
            {/*  multiple*/}
            {/*  options={diseasesOptions}*/}
            {/*>*/}
            {/*  {({ input, meta, options }) => (*/}
            {/*    <div*/}
            {/*      className={*/}
            {/*        meta.error && meta.touched*/}
            {/*          ? styles.formFieldError*/}
            {/*          : styles.formField*/}
            {/*      }*/}
            {/*    >*/}
            {/*      <label>Хвороби</label>*/}
            {/*      <select*/}
            {/*        {...input}*/}
            {/*        onChange={(event) => {*/}
            {/*          meta.error && form.resetFieldState('diseases');*/}
            {/*          input.onChange(event.target.value);*/}
            {/*        }}*/}
            {/*        className={styles.fieldInput}*/}
            {/*      >*/}
            {/*        {options.map((option: { text: string; value: string }) => (*/}
            {/*          <option key={option.value} value={option.value}>*/}
            {/*            {option.text}*/}
            {/*          </option>*/}
            {/*        ))}*/}
            {/*      </select>*/}
            {/*      {meta.error && meta.touched && (*/}
            {/*        <span className={styles.fieldError}>{meta.error}</span>*/}
            {/*      )}*/}
            {/*    </div>*/}
            {/*  )}*/}
            {/*</Field>*/}
            <button type={'submit'} className={styles.submitButton}>
              Приєднатися
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </button>
          </form>
        )}
      />
    </>
  );
};

export default QuestionnaireFormView;
