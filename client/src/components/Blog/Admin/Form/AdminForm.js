import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from "@emotion/core";
import { connect } from 'react-redux';
import * as S from '../../redux/selectors';
import * as A from '../../redux/actions';

import ButtonSpinner from '../../../UI/Spinners/Button/ButtonSpinner';
import FieldText from '../../../UI/Field/Text/FieldText';
import FieldTextArea from '../../../UI/Field/TextArea/FieldTextArea';
import classes from './AdminForm.module.css';

const initialValues = {
    img: '',
    title: '',
    text: ''
}
const validationSchema = Yup.object({
    img: Yup.string().required('Введіть URL зображення *'),
    title: Yup.string().required('Введіть назву *'),
    text: Yup.string().required('Введіть текст *')
})
const style = css`
    width: 100px;
    height: 3px;
`

const AdminForm = (props) => {
    const {
        currentPost,
        status,
        isLoading,
        createPost,
        readPost,
        updatePost,
        setLoader,
        resetStatus
    } = props
    const { id } = useParams()
    const currentPostValues = {
        img: currentPost.img,
        title: currentPost.title,
        text: currentPost.text
    }

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        readPost(`/blog/posts/${id}`, {signal})
        window.addEventListener('click', () => {
            resetStatus()
        })

        return () => {
            controller.abort()
            window.removeEventListener('click', () => {
                resetStatus()
            })
        }
    }, [readPost, resetStatus, id, status])

    const handleSubmit = (values, { resetForm }) => {
        let options = {
            method: !id ? 'POST' : 'PUT',
            body: values
        }

        setLoader(true)
        !id ? createPost('/posts', options) : updatePost(`/posts/${id}`, options)
        if (!id) resetForm()
    }

    return (
        <div className={classes.NewPost}>
            <div className={classes.Header}>
                <h2>{!id ? 'Новий пост' : 'Редагувати пост'}</h2>
            </div>
            <div className={`wrapper ${classes.Form}`}>
                <Formik
                    enableReinitialize={true}
                    initialValues={!id ? initialValues : currentPostValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {() => {
                        return (
                            <Form>
                                <FieldText id="img" type="text" label="URL зображення *" />
                                <FieldText id="title" type="text" label="назва *" />
                                <FieldTextArea id="text" type="text" label="текст *" />
                                <span className={status === 'success'
                                                 ? `${classes.Msg} ${classes.Success}`
                                                 : `${classes.Msg} ${classes.Failed}`}>
                                    {!id
                                    ? 'Пост успішно додано'
                                    : 'Пост успішно змінено'}
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
                                           запостити
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
        currentPost: S.currentPost(state),
        status: S.status(state),
        isLoading: S.isLoading(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (url, options) => dispatch(A.createPost(url, options)),
        readPost: (url, options) => dispatch(A.readPost(url, options)),
        updatePost: (url, options) => dispatch(A.updatePost(url, options)),
        setLoader: (loading) => dispatch(A.setLoader(loading)),
        resetStatus: () => dispatch(A.resetStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);
