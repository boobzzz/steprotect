import React, { useState, useEffect } from 'react';
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
    img: Yup.string().required('Введіть URL зображення статті'),
    title: Yup.string().required('Введіть назву статті'),
    text: Yup.string().required('Введіть текст статті')
})
const style = css`
    width: 100px;
    height: 3px;
`

const AdminForm = (props) => {
    const { isLoading, success, error, currentPost, setLoader, readPost, createPost, updatePost } = props
    const { id } = useParams()
    const currentPostValues = {
        img: currentPost.img,
        title: currentPost.title,
        text: currentPost.text
    }
    const [ showMessage, setShowMessage ] = useState(false)
    console.log(success.message)
    const messageClass = showMessage
                         ? `${classes.Msg} ${classes.Show}`
                         : `${classes.Msg} ${classes.Hide}`

    useEffect(() => {
        setLoader(false)
        id && readPost(`/blog/posts/${id}`)
    }, [setLoader, readPost, id])

    const handleSubmit = (values, { resetForm }) => {
        let options = {
            method: !id ? 'POST' : 'PUT',
            body: values
        }

        setLoader(true)
        
        !id
        ? createPost('/blog/posts', options)
        : updatePost(`/blog/posts/${id}`, options)
        
        if (!id) resetForm()

        if (!isLoading) setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 5000)
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
                                <span className={messageClass}>
                                    {success.message ? success.message : error.message}
                                </span>
                                <div className={classes.SubmitBtn}>
                                    {isLoading
                                     ? <div>
                                           <ButtonSpinner
                                               style={style}
                                               color="#FF0000"
                                               loading={isLoading} />
                                       </div>
                                     : <button type="submit">запостити</button>}
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
        isLoading: S.isLoading(state),
        success: S.getSuccess(state),
        error: S.getError(state),
        currentPost: S.getCurrentPost(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoader: (loading) => dispatch(A.setLoader(loading)),
        readPost: (url, options) => dispatch(A.readPost(url, options)),
        createPost: (url, options) => dispatch(A.createPost(url, options)),
        updatePost: (url, options) => dispatch(A.updatePost(url, options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);
