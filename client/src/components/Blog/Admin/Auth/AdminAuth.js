import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from "@emotion/core";
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';

import { isLoading, getError, getSuccess, getLoggedIn } from '../../redux/selectors';
import { setLoaderAction, adminAuthAction, resetSuccessAction, setIsLoggedIn } from '../../redux/actions';
import { ButtonSpinner } from '../../../UI/Spinners/Button/ButtonSpinner';
import { FieldText } from '../../../UI/Field/Text/FieldText';
import { useForm } from './useForm';
import { useAuth } from '../hooks/useAuth';
import classes from './AdminAuth.module.css';

const initialValues = {
    username: '',
    password: ''
}
const validationSchema = Yup.object({
    username: Yup.string().required('Введіть логін'),
    password: Yup.string().required('Введіть пароль')
})
const style = css`
    width: 100px;
    height: 3px;
`

const AdminAuth = (props) => {
    const { isLoading, success, error, isLoggedIn, setLoader, sendForm, setIsLoggedIn, resetSuccess } = props
    const authParams = [isLoading, setLoader, sendForm]
    const { showMessage, handleSubmit } = useForm(...authParams)
    const { login } = useAuth(success, setIsLoggedIn, resetSuccess)
    const msgShowToggle = showMessage ? classes.Show : classes.Hide

    useEffect(() => {
        if (!isEmpty(success)) login()
    }, [success, login])

    if (isLoggedIn) return <Redirect to="/administration/list" />
    
    return (
        <div className={classes.Container}>
            <div className={classes.Form}>
                <h3>Авторизація</h3>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {() => {
                        return (
                            <Form>
                                <FieldText id="username" type="text" label="логін *" />
                                <FieldText id="password" type="password" label="пароль *" />
                                <span className={`${classes.Msg} ${msgShowToggle}`}>
                                    {error.message}
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
                                              увійти
                                          </button>}
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: isLoading(state),
        success: getSuccess(state),
        error: getError(state),
        isLoggedIn: getLoggedIn(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoader: (loading) => dispatch(setLoaderAction(loading)),
        sendForm: (url, options) => dispatch(adminAuthAction(url, options)),
        setIsLoggedIn: (value) => dispatch(setIsLoggedIn(value)),
        resetSuccess: () => dispatch(resetSuccessAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);