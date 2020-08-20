import React from 'react';

import { Field, useFormikContext } from 'formik';
import { IMaskInput } from 'react-imask';

const phoneMask = '{+38} (000)000-00-00'

const FieldPhone = ({ id, label }) => {
    const { setFieldValue } = useFormikContext()
    
    const changeHandler = (value, mask) => {
        setFieldValue(id, value)
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field name={id}>
                {({ field, meta }) =>
                <div>
                    <IMaskInput
                        id={id}
                        mask={phoneMask}
                        unmask={true}
                        onAccept={changeHandler}
                        lazy={false}
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

export default FieldPhone;
