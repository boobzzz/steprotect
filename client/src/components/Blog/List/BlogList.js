import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import withConnect from '../../HOC/withConnect';
import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';
import * as C from '../../../utils/api/constants';

import PageSpinner from '../../UI/Spinners/Page/PageSpinner';
import BlogItem from '../Item/BlogItem';
import classes from './BlogList.module.css';

const BlogList = (props) => {
    const { isLoading, posts, setLoader, getPosts } = props

    useEffect(() => {
        setLoader(true)
        getPosts(`${C.API_ENDPOINT}/posts`)
    }, [getPosts, setLoader])

    return (
        <main>
            {isLoading
            ? <div className={classes.Spinner}>
                  <PageSpinner
                      size={100}
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

export default withConnect(BlogList, selectors, actions);
