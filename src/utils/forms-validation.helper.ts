import { ValidationErrors } from 'final-form';
import Joi from '@hapi/joi';

export interface FormInputs {
  [key: string]: any;
}

export const validator = (
  values: FormInputs,
  validationSchema: Joi.ObjectSchema
): ValidationErrors | undefined =>
  validationSchema.validate(values).error?.details.reduce(
    (errors, error) => ({
      ...errors,
      [error.path.toString()]: error.message
    }),
    {}
  );
