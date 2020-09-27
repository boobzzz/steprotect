import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as S from '../redux/selectors';
import * as A from '../redux/actions';
import * as C from '../../../utils/api/constants';

import PageSpinner from '../../UI/Spinners/Page/PageSpinner';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import classes from './BlogDetails.module.css';

const BlogDetails = (props) => {
    const { currentPost, isLoading, readPost, setLoader } = props
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
                      size={60}
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

const mapStateToProps = (state) => {
    return {
        currentPost: S.currentPost(state),
        isLoading: S.isLoading(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        readPost: (url, options) => dispatch(A.readPost(url, options)),
        setLoader: (loading) => dispatch(A.setLoader(loading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
