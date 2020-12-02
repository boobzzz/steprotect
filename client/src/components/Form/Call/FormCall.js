import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from "@emotion/core";
import { connect } from 'react-redux';
import * as S from '../redux/selectors';
import * as A from '../redux/actions';

import ButtonSpinner from '../../UI/Spinners/Button/ButtonSpinner';
import FieldPhone from '../../UI/Field/Phone/FieldPhone';
import { GoArrowRight } from 'react-icons/go';

import classes from './FormCall.module.css';

const initialValues = {
    phone: ''
}
const validationSchema = Yup.object({
    phone: Yup.string().min(13, 'Номер телефону надто короткий *')
})
const style = css`
    width: 200px;
    height: 5px;
`
const FormCall = (props) => {
    const { slide, isLoading, message, setLoader, sendOrder, resetMessage } = props
    const [ showCallForm, setShowCallForm ] = useState(false)
    const [ showMessage, setShowMessage ] = useState(false)

    const msgShowToggle = showMessage ? classes.Show : classes.Hide
    const callFormToggle = showCallForm ? classes.Clicked : ''

    useEffect(() => {
        window.addEventListener('click', () => {
            setShowCallForm(false)
        })
    }, [])

    const toggleCallOrderBtn = (e) => {
        e.stopPropagation()
        setShowCallForm(true)
        setShowMessage(false)
    }

    const handleSubmit = (values, { resetForm }) => {
        let options = {
            method: 'POST',
            body: values
        }

        setLoader(true)
        sendOrder('/send/call', options)
        resetForm({ values: '' })

        if (!isLoading) setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
            resetMessage()
        }, 5000)
    }

    return (
        <>
            <span className={`${classes.Msg} ${msgShowToggle}`}>
                {message}
            </span>
            <div
                className={`${classes.Button} ${callFormToggle}`}
                onClick={toggleCallOrderBtn}>
                <i>{slide.btn}</i>
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
        isLoading: S.isLoading(state),
        message: S.getMessage(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoader: (loading) => dispatch(A.setLoader(loading)),
        sendOrder: (url, options) => dispatch(A.sendOrder(url, options)),
        resetMessage: () => dispatch(A.resetMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCall);
