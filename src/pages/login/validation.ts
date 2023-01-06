import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username: Yup.string()
        .required('An username is required.')
        .min(3, 'The username must be 3 characters or more.')
        .max(20, 'The username must be 20 characters or less.')
        .matches(
            /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/,
            'The username does not allow numbers or special characters.'
        ),
    password: Yup.string()
        .required('A password is required.')
        .min(8, 'The password must be 8 characters or more')
        .max(20, 'The password must be 20 characters or less.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        ),
});
