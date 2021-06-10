import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'ramda';

import { isLoading, getError, getPosts, getSuccess, getLoggedIn } from '../../redux/selectors';
import { getPostsAction, setIsLoggedIn, resetSuccessAction } from '../../redux/actions';
import { PageSpinner } from '../../../UI/Spinners/Page/PageSpinner';
import { NoMatch } from '../../../UI/NoMatch/NoMatch';
import { Button } from '../../../UI/Buttons/Button/Button';
import { MdExitToApp } from 'react-icons/md';
import { useAuth } from '../hooks/useAuth';
import BlogItem from '../../Item/BlogItem';
import classes from './AdminList.module.css';

const AdminList = (props) => {
    const { isLoading, success, error, isLoggedIn, posts, getPosts, setIsLoggedIn, resetSuccess } = props
    const { logout } = useAuth(success, setIsLoggedIn, resetSuccess)

    useEffect(() => {
        getPosts('/blog/posts')
    }, [getPosts])

    const adminLogout = () => logout()

    if (isLoading) {
        return (
            <div className={classes.Spinner}>
                <PageSpinner size={80} color="#FF0000" loading={isLoading} />
            </div>
        )
    }

    if (!isEmpty(error)) return <NoMatch error={error} />

    if (!isLoggedIn) return <Redirect to="/administration" />

    return (
        <main>
            <section className={classes.AdminList}>
                <div className={classes.Header}>
                    <h2>Адміністрування</h2>
                    <Button
                        path="/administration"
                        label={<MdExitToApp />}
                        clicked={adminLogout} />
                </div>
                <div className={`wrapper ${classes.Content}`}>
                    <div className={classes.List}>
                        {posts.map(post =>
                            <BlogItem key={post._id} post={post} />
                        )}
                    </div>
                    <div className={classes.Button}>
                        <Button
                            path="/administration/post/create"
                            label="Новий пост" />
                    </div>
                </div>
            </section>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: isLoading(state),
        success: getSuccess(state),
        error: getError(state),
        posts: getPosts(state),
        isLoggedIn: getLoggedIn(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (url, options) => dispatch(getPostsAction(url, options)),
        setIsLoggedIn: (value) => dispatch(setIsLoggedIn(value)),
        resetSuccess: () => dispatch(resetSuccessAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);