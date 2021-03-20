import Joi from '@hapi/joi';
import { IUserData } from '../../QuestionnaireContainer';
import { ValidationErrors } from 'final-form';
import { validator } from '../../../../utils/forms-validation.helper';

export const questionnaireSchema = Joi.object()
  .keys({
    name: Joi.string()
      .regex(/^[а-яА-Яa-zA-Z0-9]+$/)
      .required()
      .messages({
        'string.pattern.base':
          "Ім'я може містити лише буквено-цифрові значення",
        'any.required': "Ім'я не може бути пустим"
      }),
    age: Joi.number().integer().min(4).max(120).required().messages({
      'number.base': `Вік може містити лише цілі числа`,
      'number.min': `Ви не можете бути молодші ніж {#limit} роки`,
      'number.max': `Ви не можете бути старші ніж {#limit} років`,
      'any.required': `Вік не може бути пустим`
    })
  })
  .options({ abortEarly: false });

export const questionnaireValidator = (
  values: IUserData
): ValidationErrors | undefined => validator(values, questionnaireSchema);
