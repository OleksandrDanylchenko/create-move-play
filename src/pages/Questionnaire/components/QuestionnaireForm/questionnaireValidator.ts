import Joi from '@hapi/joi';
import { ValidationErrors } from 'final-form';
import { validator } from '../../../../utils/forms-validation.helper';
import { IUserAnswers } from '../../../../redux/reducers/user';

export const questionnaireSchema = Joi.object()
  .keys({
    name: Joi.string()
      .regex(/^[а-яА-Яa-zA-Z0-9\s]+$/)
      .required()
      .messages({
        'string.pattern.base':
          "Ім'я може містити лише буквено-цифрові значення",
        'string.empty': "Ім'я не може бути пустим",
        'any.required': "Зазначте ваше ім'я"
      }),
    age: Joi.number().integer().min(4).max(120).required().messages({
      'number.base': `Вік може містити лише цілі числа`,
      'number.min': `Ви не можете бути молодші ніж {#limit} роки`,
      'number.max': `Ви не можете бути старші ніж {#limit} років`,
      'any.required': `Зазначте ваш вік`
    }),
    preferredDayPeriod: Joi.string()
      .valid('morningAndDinner', 'dinnerAndSupper')
      .required()
      .messages({
        'any.only': `Обраний період поки недоступний`,
        'any.required': `Зазначте найзручніший період`
      }),
    diseases: Joi.array().items(Joi.string()).default([]).optional()
  })
  .options({ abortEarly: false });

export const questionnaireValidator = (
  values: IUserAnswers
): ValidationErrors | undefined => validator(values, questionnaireSchema);
