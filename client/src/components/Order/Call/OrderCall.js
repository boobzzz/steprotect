import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from "@emotion/core";
import { connect } from 'react-redux';
import { isLoading, getMessage } from '../redux/selectors';
import { setLoaderAction, sendOrderAction, resetMessageAction } from '../redux/actions';

import { ButtonSpinner } from '../../UI/Spinners/Button/ButtonSpinner';
import { FieldPhone } from '../../UI/Field/Phone/FieldPhone';
import { GoArrowRight } from 'react-icons/go';
import { useCall } from './useCall';
import classes from './OrderCall.module.css';

const initialValues = {
    phone: ''
}
const validationSchema = Yup.object({
    phone: Yup.string()
        .required('Введіть Ваш номер телефону')
        .min(13, 'Номер телефону надто короткий')
})
const style = css`
    width: 200px;
    height: 5px;
`
const OrderCall = (props) => {
    const { btn, isLoading, message, setLoader, sendOrder, resetMessage } = props
    const callParams = [isLoading, setLoader, sendOrder, resetMessage]
    const { showCallForm, showMessage, toggleCallOrderBtn, handleSubmit } = useCall(...callParams)
    const msgShowToggle = showMessage ? classes.Show : classes.Hide
    const callFormToggle = showCallForm ? classes.Clicked : ''
    
    return (
        <>
            <span className={`${classes.Msg} ${msgShowToggle}`}>
                {message}
            </span>
            <div
                className={`${classes.Button} ${callFormToggle}`}
                onClick={toggleCallOrderBtn}>
                <span>{btn}</span>
                {isLoading
                 ? <ButtonSpinner
                        style={style}
                        color="#FF0000"
                        loading={isLoading} />
                 : <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        {() => {
                            return (
                                <Form>
                                    <FieldPhone id="phone" />
                                    <button type="submit">
                                        <GoArrowRight />
                                    </button>
                                </Form>
                            )
                        }}
                    </Formik>
                }
            </div>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderCall);