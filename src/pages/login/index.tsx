import { Form, Formik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import InputText from '../../components/inputText';
import { GREEN, LIGHT_BLACK } from '../../constants/colors';
import { useAuth } from '../../context/auth';
import { IUser } from '../../types/user';
import { Container, Label, Title, Wrapper } from './styles';
import { validationSchema } from './validation';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();

    const redirectPath = location.state?.path || '/';

    const handleSubmit = (values: IUser) => {
        console.log(values);
        auth.login(values);
        navigate(redirectPath, { replace: true });
    };

    return (
        <Container>
            <Wrapper>
                <Formik
                    initialValues={{
                        username: 'Admin',
                        password: 'P@ssword123',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {() => (
                        <Form noValidate>
                            <Title>Admin Dashboard</Title>
                            <InputText
                                type="text"
                                label={<Label>Username</Label>}
                                placeholder="Admin"
                                name="username"
                            />
                            <InputText
                                type="password"
                                label={<Label>Password</Label>}
                                placeholder="***********"
                                name="password"
                            />
                            <Button
                                text="ORDER NOW"
                                gradient={[LIGHT_BLACK, GREEN]}
                                type="submit"
                                style={{
                                    width: '100%',
                                    marginTop: '0px',
                                }}
                            />
                        </Form>
                    )}
                </Formik>
            </Wrapper>
        </Container>
    );
};

export default Login;
