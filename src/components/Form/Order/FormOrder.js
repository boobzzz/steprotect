import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as U from '../../../utils/api';
import { css } from "@emotion/core";

import Spinner from '../../UI/Spinner/Spinner';
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
const style = css`
    width: 100px;
    height: 3px;
`

const FormOrder = (props) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ successMsg, setSuccessMsg ] = useState(false)

    const handleSubmit = async (values, {resetForm}) => {
        let options = {
            method: 'POST',
            body: values
        }

        setIsLoading(true)
        let res = await U.fetchJSON('/order', options)
        setIsLoading(false)

        res.status === 200 ? setSuccessMsg(true) : setSuccessMsg(false)

        resetForm({ values: '' })
    }

    return (
        <>
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
                                <span className={successMsg
                                    ? `${classes.Msg} ${classes.Success}`
                                    : `${classes.Msg} ${classes.Failed}`}>
                                    Замовлення успішно сформовано
                                </span>
                                <div className={classes.SubmitBtn}>
                                    {isLoading
                                    ? <div>
                                        <Spinner style={style} color="#FF0000" loading={isLoading} />
                                    </div>
                                    : <button type="submit">
                                        замовити
                                    </button>}
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export default FormOrder;
