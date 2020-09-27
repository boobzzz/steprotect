import React, { useEffect } from 'react';
import withConnect from '../../../HOC/withConnect';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';
import * as C from '../../../../utils/api/constants';

import PageSpinner from '../../../UI/Spinners/Page/PageSpinner';
import BlogItem from '../../Item/BlogItem';
import Button from '../../../UI/Buttons/Button/Button';
import classes from './AdminList.module.css';

const AdminList = (props) => {
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

export default withConnect(AdminList, selectors, actions);
