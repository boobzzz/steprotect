import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as U from '../../../utils/api';

import FieldText from '../../UI/Field/Text/FieldText';
import FieldPhone from '../../UI/Field/Phone/FieldPhone';
import FieldSelect from '../../UI/Field/Select/FieldSelect';
import classes from './FormOrder.module.css';

const options = [
    {name: 'Виберіть послугу...', value: ''},
    {name: 'Відеоспостереження', value: 'video'},
    {name: 'Охоронна сигналізація', value: 'alarm'},
    {name: 'Системи доступу', value: 'access'},
    {name: 'Інтернет', value: 'intenet'},
    {name: 'GSM зв\'язок', value: 'gsm'},
]
const initialValues = {
    name: '',
    services: '',
    phone: '',
    email: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('Введіть Ваше ім\'я *'),
    services: Yup.string().required('Виберіть послугу *'),
    phone: Yup.string().min(13, 'Номер телефону надто короткий *'),
    email: Yup.string()
        .required('Введіть Вашу електронну скриньку *')
        .email('Невірний формат електронної скриньки *'),
})

const FormOrder = (props) => {
    const [ successMsg, setSuccessMsg ] = useState(false)

    const handleSubmit = async (values, {resetForm}) => {
        let options = {
            method: 'POST',
            body: values
        }

        let res = await U.fetchJSON('/order', options)
        res.status === 200 ? setSuccessMsg(true) : setSuccessMsg(false)

        resetForm({ values: '' })
    }

    return (
        <>
            <span className={successMsg
                            ? `${classes.Msg} ${classes.Success}`
                            : `${classes.Msg} ${classes.Failed}`}>
                Замовлення успішно сформовано
            </span>
            <div className={classes.Form}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {() => {
                        return (
                            <Form>
                                <FieldText id="name" type="text" label="ім'я *" />
                                <FieldSelect id="services" label="послуга *" options={options} />
                                <FieldPhone id="phone" label="номер телефону *" />
                                <FieldText id="email" type="email" label="електронна скринька *" />
                                <button type="submit" className={classes.SubmitBtn}>
                                    замовити
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export default FormOrder;
