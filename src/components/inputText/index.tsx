import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { ErrorContainer, ErrorText, Input, Item, Label } from './styles';

interface IInputTextProps {
    name: string;
    label: string | React.ReactNode;
    type: 'text' | 'password';
    placeholder?: string;
    [x: string]: any;
}

const InputText = (props: IInputTextProps) => {
    const { label } = props;
    const [field] = useField(props);
    return (
        <Item>
            <Label>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={props.name}>
                {(msg) => (
                    <ErrorContainer>
                        <ErrorText>
                            <strong>ERROR:</strong> {msg}
                        </ErrorText>
                    </ErrorContainer>
                )}
            </ErrorMessage>
        </Item>
    );
};

export default InputText;
