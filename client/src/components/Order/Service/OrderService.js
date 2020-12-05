import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from "@emotion/core";
import { connect } from 'react-redux';
import { isLoading, getMessage } from '../redux/selectors';
import { setLoaderAction, sendOrderAction, resetMessageAction } from '../redux/actions';

import { ButtonSpinner } from '../../UI/Spinners/Button/ButtonSpinner';
import { FieldText } from '../../UI/Field/Text/FieldText';
import { FieldPhone } from '../../UI/Field/Phone/FieldPhone';
import { FieldSelect } from '../../UI/Field/Select/FieldSelect';
import { useForm } from './useForm';
import { options } from './options';
import classes from './OrderService.module.css';

const initialValues = {
    name: '',
    services: '',
    phone: '',
    email: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('Введіть Ваше ім\'я'),
    services: Yup.string().required('Виберіть послугу'),
    phone: Yup.string().min(13, 'Номер телефону надто короткий'),
    email: Yup.string()
        .required('Введіть Вашу електронну скриньку')
        .email('Невірний формат електронної скриньки'),
})
const style = css`
    width: 100px;
    height: 3px;
`

const OrderService = (props) => {
    const { isLoading, message, setLoader, sendOrder, resetMessage } = props
    const serviceParams = [isLoading, setLoader, sendOrder, resetMessage]
    const { showMessage, handleSubmit } = useForm(...serviceParams)

    const msgShowToggle = showMessage ? classes.Show : classes.Hide
    
    return (
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
                            <span className={`${classes.Msg} ${msgShowToggle}`}>
                                {message}
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
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: isLoading(state),
        message: getMessage(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoader: (loading) => dispatch(setLoaderAction(loading)),
        sendOrder: (url, options) => dispatch(sendOrderAction(url, options)),
        resetMessage: () => dispatch(resetMessageAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderService);