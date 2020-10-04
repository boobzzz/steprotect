import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from "@emotion/core";
import { connect } from 'react-redux';
import * as S from '../redux/selectors';
import * as A from '../redux/actions';

import ButtonSpinner from '../../UI/Spinners/Button/ButtonSpinner';
import FieldText from '../../UI/Field/Text/FieldText';
import FieldPhone from '../../UI/Field/Phone/FieldPhone';
import FieldSelect from '../../UI/Field/Select/FieldSelect';

import classes from './FormOrder.module.css';

const options = [
    {name: 'Виберіть послугу...', value: ''},
    {name: 'Відеоспостереження', value: 'video'},
    {name: 'Виявлення систем стеження', value: 'spy'},
    {name: 'Охоронна сигналізація', value: 'alarm'},
    {name: 'Системи доступу', value: 'access'},
    {name: 'Комп\'ютерні мережі', value: 'intenet'},
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
    const { modalShown, status, isLoading, sendOrder, setLoader, resetStatus } = props
    const [ successMsg, setSuccessMsg ] = useState(false)

    useEffect(() => {
        if (!modalShown) resetStatus()

        status === 'success' ? setSuccessMsg(true) : setSuccessMsg(false)
    }, [modalShown, status, resetStatus])

    const handleSubmit = (values, {resetForm}) => {
        let options = {
            method: 'POST',
            body: values
        }

        setLoader(true)
        sendOrder('/send/order', options)
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
                                           <ButtonSpinner
                                               style={style}
                                               color="#FF0000"
                                               loading={isLoading} />
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

const mapStateToProps = (state) => {
    return {
        status: S.status(state),
        isLoading: S.isLoading(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendOrder: (url, options) => dispatch(A.sendOrder(url, options)),
        setLoader: (loading) => dispatch(A.setLoader(loading)),
        resetStatus: () => dispatch(A.resetStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOrder);
