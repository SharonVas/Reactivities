import React from 'react'
import { FormFieldProps, Form, Label, Select } from 'semantic-ui-react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, HTMLSelectElement>, FormFieldProps { }

export const SelectInput: React.FC<IProps> = ({
    input,
    width,
    options,
    placeholder,
    meta: { touched, error }
}) => {
    return (
        <Form.Field error={touched && !!error} widt={width}>
            <Select
                value={input.value}
                onChange={(e, data) => input.onChange(data.value)}
                placeholder={placeholder}
                options={options}
            />
            {touched && error && (
                <Label basic color='red'>
                    {error}
                </Label>
            )}
        </Form.Field>
    )
}
