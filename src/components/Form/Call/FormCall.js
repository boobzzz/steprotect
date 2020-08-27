import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as U from '../../../utils/api';
import { css } from "@emotion/core";

import Spinner from '../../UI/Spinner/Spinner';
import FieldPhone from '../../UI/Field/Phone/FieldPhone';
import { GoArrowRight } from 'react-icons/go';

import classes from './FormCall.module.css';

const initialValues = {phone: ''}
const validationSchema = Yup.object({
    phone: Yup.string().min(13, 'Номер телефону надто короткий *')
})
const style = css`
    width: 200px;
    height: 5px;
`

const FormCall = ({ slide }) => {
    const [ call, setCall ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ successMsg, setSuccessMsg ] = useState(false)

    useEffect(() => {
        window.addEventListener('click', () => {
            setCall(false)
            setSuccessMsg(false)
        })
    }, [])

    const toggleCallOrderBtn = (e) => {
        e.stopPropagation()
        setCall(true)
        setSuccessMsg(false)
    }

    const handleSubmit = async (values, {resetForm}) => {
        let options = {
            method: 'POST',
            body: values
        }

        setIsLoading(true)
        let res = await U.fetchJSON('/call', options)
        setIsLoading(false)

        res.status === 200 ? setSuccessMsg(true) : setSuccessMsg(false)

        resetForm({ values: '' })
    }

    return (
        <>
            <span className={successMsg
                            ? `${classes.Msg} ${classes.Success}`
                            : `${classes.Msg} ${classes.Failed}`}>
                Дзвінок успішно замовлено
            </span>
            <div
                onClick={toggleCallOrderBtn}
                className={call
                          ? `${classes.Button} ${classes.Clicked}`
                          : `${classes.Button}`}>
                <i>{slide.btn}</i>
                {isLoading
                    ? <Spinner style={style} color="#FF0000" loading={isLoading} />
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

export default FormCall;
