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
    const { slide, status, isLoading, sendOrder, setLoader, resetStatus } = props
    const [ callForm, setCallForm ] = useState(false)
    const [ successMsg, setSuccessMsg ] = useState(false)

    useEffect(() => {
        window.addEventListener('click', () => {
            setCallForm(false)
            setSuccessMsg(false)
            resetStatus()
        })

        status === 'success' ? setSuccessMsg(true) : setSuccessMsg(false)

        return () => {

        }
    }, [resetStatus, setLoader, status])

    const toggleCallOrderBtn = (e) => {
        e.stopPropagation()
        setCallForm(true)
        setSuccessMsg(false)
    }

    const handleSubmit = (values, { resetForm }) => {
        let options = {
            method: 'POST',
            body: values
        }

        setLoader(true)
        sendOrder('/send/call', options)
        resetForm({ values: '' })
    }

    return (
        <>
            <span className={successMsg
                             ? `${classes.Msg} ${classes.Success}`
                             : `${classes.Msg} ${classes.Failed}`}>
                Дзвінок замовлено успішно
            </span>
            <div
                onClick={toggleCallOrderBtn}
                className={callForm
                           ? `${classes.Button} ${classes.Clicked}`
                           : `${classes.Button}`}>
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
        status: S.getStatus(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(FormCall);
