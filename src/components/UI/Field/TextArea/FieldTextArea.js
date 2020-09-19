import React from 'react';
import { Field } from 'formik';

const FieldTextArea = ({ id, type, label, cols, rows }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field name={id}>
                {({ field, meta }) =>
                    <div>
                        <textarea
                            id={id}
                            type={type}
                            autoComplete="off"
                            {...field} />
                        {meta.touched && meta.error
                        ? <div>{meta.error}</div>
                        : null}
                    </div>
                }
            </Field>
        </div>
    )
}

export default FieldTextArea;
