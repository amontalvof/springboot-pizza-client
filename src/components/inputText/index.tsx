import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { ErrorText, Input, Item, Label } from './styles';

interface IInputTextProps {
    name: string;
    label: string;
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
                    <ErrorText>
                        <strong>ERROR:</strong> {msg}
                    </ErrorText>
                )}
            </ErrorMessage>
        </Item>
    );
};

export default InputText;
