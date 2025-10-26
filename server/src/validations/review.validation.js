import Joi from "joi";

export const reviewSchemaValidator = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().required(),
  }).required(),
});
