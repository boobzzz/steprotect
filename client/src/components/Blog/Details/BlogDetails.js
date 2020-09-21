import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import withConnect from '../../HOC/withConnect';
import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';
import * as C from '../../../utils/api/constants';

import PageSpinner from '../../UI/Spinners/Page/PageSpinner';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import classes from './BlogDetails.module.css';

const BlogDetails = (props) => {
    const { isLoading, currentPost, setLoader, readPost } = props
    const { id } = useParams()

    useEffect(() => {
        setLoader(true)
        readPost(`${C.API_ENDPOINT}/posts/${id}`)
    }, [id, readPost, setLoader])

    return (
        <main>
            {isLoading
            ? <div className={classes.Spinner}>
                  <PageSpinner
                      size={100}
                      color="#FF0000"
                      loading={isLoading} />
              </div>
            : <section className={classes.BlogDetails}>
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
              </section>}
        </main>
    )
}

export default withConnect(BlogDetails, selectors, actions);
