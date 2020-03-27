import { celebrate, Segments, Joi } from 'celebrate'

export const NgoCreateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
})

export const ProfilesListValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
})

export const IncidentsCreateValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  })
})

export const IncidentsListValidator = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
})

export const IncidentsDeleteValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
})

export const SessionsCreateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
})