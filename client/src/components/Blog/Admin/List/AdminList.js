import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { isLoading, getError, getPosts } from '../../redux/selectors';
import { getPostsAction } from '../../redux/actions';

import { PageSpinner } from '../../../UI/Spinners/Page/PageSpinner';
import { NoMatch } from '../../../UI/NoMatch/NoMatch';
import { Button } from '../../../UI/Buttons/Button/Button';
import BlogItem from '../../Item/BlogItem';
import classes from './AdminList.module.css';

const AdminList = (props) => {
    const { isLoading, error, posts, getPosts } = props

    useEffect(() => {
        getPosts('/blog/posts')
    }, [getPosts])

    if (isLoading) {
        return (
            <div className={classes.Spinner}>
                <PageSpinner size={80} color="#FF0000" loading={isLoading} />
            </div>
        )
    }

    if (!isEmpty(error)) return <NoMatch error={error} />

    return (
        <main>
            <section className={classes.AdminList}>
                <div className={classes.Header}>
                    <h2>Адміністрування</h2>
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
        error: getError(state),
        posts: getPosts(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (url, options) => dispatch(getPostsAction(url, options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);