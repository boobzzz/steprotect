import React from 'react';
import { Field } from 'formik';

const FieldSelect = ({ id, label, options }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field name={id}>
                {({ field, meta }) =>
                    <div>
                        <select id={id} {...field}>
                            {options.map(option =>
                                <option key={option.value}>
                                    {option.name}
                                </option>
                            )}
                        </select>
                        {meta.touched && meta.error
                        ? <div>{meta.error}</div>
                        : null}
                    </div>
                }
            </Field>
        </div>
    )
}

export default FieldSelect;
