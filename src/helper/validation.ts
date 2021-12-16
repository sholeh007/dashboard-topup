import Joi from "joi";

export const schemaCategory: any = Joi.object({
  category: Joi.string().required(),
});
