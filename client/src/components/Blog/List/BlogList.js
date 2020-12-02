import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import * as S from '../redux/selectors';
import * as A from '../redux/actions';

import PageSpinner from '../../UI/Spinners/Page/PageSpinner';
import { NoMatch } from '../../UI/NoMatch/NoMatch';
import BlogItem from '../Item/BlogItem';
import classes from './BlogList.module.css';

const BlogList = (props) => {
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
            <section className={classes.BlogList}>
                <div className={classes.Header}>
                    <h2>Блог</h2>
                    <div>
                        <NavLink to="/">Головна</NavLink>
                        <span>/</span>
                        <NavLink to="/blog">Блог</NavLink>
                    </div>
                </div>
                <div className={`wrapper ${classes.List}`}>
                    {posts.map(post =>
                        <BlogItem key={post._id} post={post} />
                    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);