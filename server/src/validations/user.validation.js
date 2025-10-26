import Joi from "joi";

export const userSchemaValidation = Joi.object({
  user: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
});
