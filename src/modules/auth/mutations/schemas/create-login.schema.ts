import joi from "joi";

import { CreateLoginRequest } from "../types";

export const createLoginSchema = joi.object<CreateLoginRequest>({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: joi.string().required(),
});
