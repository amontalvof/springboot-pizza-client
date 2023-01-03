import * as Yup from 'yup';

export const validationSchema = Yup.object({
    customer: Yup.string()
        .required('A customer is required.')
        .min(3, 'The customer must be 3 characters or more.')
        .max(20, 'The customer must be 20 characters or less.')
        .matches(
            /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/,
            'The customer does not allow numbers or special characters.'
        ),
    phone: Yup.string()
        .required('A phone number is required.')
        .matches(
            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
            'Phone number is not valid'
        ),
    address: Yup.string()
        .required('An address is required.')
        .min(5, 'The customer must be 5 characters or more.')
        .max(200, 'The address must be 200 characters or less.')
        .matches(
            /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9,.# ]*$/,
            'The address does not allow special characters.'
        ),
});
