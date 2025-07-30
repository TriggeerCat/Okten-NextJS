import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/\w{3,10}/).required().messages({
        'string.empty' : 'You must fill this field to continue',
        'string.pattern.base' : 'Brand of the car must be at least 3 characters'
    }),
    year: Joi.number().min(1950).max(2025).required().messages({
        'number.empty' : 'You must fill this field to continue',
        'number.min' : 'You must enter actual year',
        'number.max' : 'You must enter actual year'
    }),
    price: Joi.number().min(1000).required().messages({
        'number.empty' : 'You must fill this field to continue',
        'number.min' : 'Your price must be at least 1000$'
    }),
})

export default carValidator