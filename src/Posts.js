import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Posts = (props) => {
    console.log(props)
    const mappedPosts = props.postData&&props.postData.map((post, index) => {
        return (
            <div className="col-12" key={index}>
                <div className="card">
                    <div className="card-body">
                        <Link to={`/post/${post.id}`} className="card-title">{post.title}</Link>
                        <p className="card-text">{post.description}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {mappedPosts}
        </div>
    );
}



export default Posts;
