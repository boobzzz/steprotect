import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import withConnect from '../../HOC/withConnect';
import * as actions from '../redux/actions';

import Button from '../../UI/Buttons/Button/Button';
import DetailsBtn from '../../UI/Buttons/DetailsBtn/DetailsBtn';
import classes from './BlogItem.module.css';

const BlogItem = (props) => {
    const { post, deletePost } = props

    const removePost = () => {
        const options = {
            method: 'DELETE'
        }

        deletePost(`/posts/${post._id}`, options)
    }

    return (
        <div className={classes.Post}>
            <div className={classes.EditBtns}>
                <Button
                    path={`/administration/post/${post._id}/edit`}
                    label={<FaRegEdit />} />
                <Button
                    path="/administration"
                    label={<FaRegTrashAlt />}
                    clicked={removePost} />
            </div>
            <NavLink to={`/blog/post/${post._id}`}>
                <img src={post.img} alt=""/>
            </NavLink>
            <div className={classes.Info}>
                <h4>{post.title}</h4>
                <DetailsBtn
                    path={`/blog/post/${post._id}`}
                    label="Детально" />
            </div>
        </div>
    )
}

export default withConnect(BlogItem, null, actions);
