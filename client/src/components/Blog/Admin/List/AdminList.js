import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as S from '../../redux/selectors';
import * as A from '../../redux/actions';
import * as C from '../../../../utils/api/constants';

import PageSpinner from '../../../UI/Spinners/Page/PageSpinner';
import BlogItem from '../../Item/BlogItem';
import Button from '../../../UI/Buttons/Button/Button';
import classes from './AdminList.module.css';

const AdminList = (props) => {
    const { posts, isLoading, setLoader, getPosts } = props

    useEffect(() => {
        setLoader(true)
        getPosts(`${C.API_ENDPOINT}/posts`)
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
            : <section className={classes.AdminList}>
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
              </section>}
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: S.posts(state),
        isLoading: S.isLoading(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (url, options) => dispatch(A.getPosts(url, options)),
        setLoader: (loading) => dispatch(A.setLoader(loading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
