import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { isLoading, getError, getCurrentPost } from '../redux/selectors';
import { readPostAction } from '../redux/actions';

import { PageSpinner } from '../../UI/Spinners/Page/PageSpinner';
import { NoMatch } from '../../UI/NoMatch/NoMatch';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader';
import classes from './BlogDetails.module.css';

const BlogDetails = (props) => {
    const { isLoading, error, currentPost, readPost } = props
    const { id } = useParams()

    useEffect(() => {
        readPost(`/blog/posts/${id}`)
    }, [id, readPost])

    if (isLoading) {
        return (
            <div className={classes.Spinner}>
                <PageSpinner
                    size={80}
                    color="#FF0000"
                    loading={isLoading} />
            </div>
        )
    }

    if (!isEmpty(error)) return <NoMatch error={error} />

    return (
        <main>
            <section className={classes.BlogDetails}>
                <div className={classes.Header}>
                    <h2>Детально</h2>
                    <div>
                        <NavLink to="/">Головна</NavLink>
                        <span>/</span>
                        <NavLink to="/blog">Блог</NavLink>
                        <span>/</span>
                        <NavLink to="/blog/post/:id">Детально</NavLink>
                    </div>
                </div>
                <article className={`wrapper ${classes.Post}`}>
                    <div>
                        <SectionHeader
                            section="Пост"
                            title={currentPost.title}
                            titleColor="#222" />
                        <p>{currentPost.text}</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: isLoading(state),
        error: getError(state),
        currentPost: getCurrentPost(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        readPost: (url, options) => dispatch(readPostAction(url, options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);