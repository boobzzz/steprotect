import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as S from '../redux/selectors';
import * as A from '../redux/actions';

import PageSpinner from '../../UI/Spinners/Page/PageSpinner';
import BlogItem from '../Item/BlogItem';
import classes from './BlogList.module.css';

const BlogList = (props) => {
    const { posts, isLoading, getPosts, setLoader } = props

    useEffect(() => {
        setLoader(true)
        getPosts('/blog/posts')
    }, [getPosts, setLoader])

    return (
        <main>
            {isLoading
            ? <div className={classes.Spinner}>
                  <PageSpinner
                      size={60}
                      color="#FF0000"
                      loading={isLoading} />
              </div>
            : <section className={classes.BlogList}>
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
              </section>}
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: S.getPosts(state),
        isLoading: S.isLoading(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (url, options) => dispatch(A.getPosts(url, options)),
        setLoader: (loading) => dispatch(A.setLoader(loading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
