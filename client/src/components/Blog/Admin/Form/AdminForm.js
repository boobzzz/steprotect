import React from 'react';
import { useParams } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { isLoading, getSuccess, getError, getCurrentPost } from '../../redux/selectors';
import { setLoaderAction, readPostAction, createPostAction, updatePostAction } from '../../redux/actions';

import { ButtonSpinner } from '../../../UI/Spinners/Button/ButtonSpinner';
import { FieldText } from '../../../UI/Field/Text/FieldText';
import { FieldTextArea } from '../../../UI/Field/TextArea/FieldTextArea';
import { useAdminForm } from './useAdminForm';
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
    const adminFormParams = [id, isLoading, readPost, setLoader, createPost, updatePost]
    const { showMessage, handleSubmit } = useAdminForm(...adminFormParams)

    const currentPostValues = {
        img: currentPost.img,
        title: currentPost.title,
        text: currentPost.text
    }
    
    const messageClass = showMessage ? classes.Show : classes.Hide

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
                                <span className={`${classes.Msg} ${messageClass}`}>
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
        isLoading: isLoading(state),
        success: getSuccess(state),
        error: getError(state),
        currentPost: getCurrentPost(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoader: (loading) => dispatch(setLoaderAction(loading)),
        readPost: (url, options) => dispatch(readPostAction(url, options)),
        createPost: (url, options) => dispatch(createPostAction(url, options)),
        updatePost: (url, options) => dispatch(updatePostAction(url, options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);