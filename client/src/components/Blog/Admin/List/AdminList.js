import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import * as S from '../../redux/selectors';
import * as A from '../../redux/actions';

import PageSpinner from '../../../UI/Spinners/Page/PageSpinner';
import { NoMatch } from '../../../UI/NoMatch/NoMatch';
import BlogItem from '../../Item/BlogItem';
import Button from '../../../UI/Buttons/Button/Button';
import classes from './AdminList.module.css';

const AdminList = (props) => {
    const { posts, isLoading, error, getPosts } = props

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
        isLoading: S.isLoading(state),
        error: S.getError(state),
        posts: S.getPosts(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (url, options) => dispatch(A.getPosts(url, options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
