import React, { useState } from 'react';
import axios from 'axios';

const Post = (props) => {
    console.log(props)
    const mappedPosts = props.postData&&props.postData.map((post, index) => {
        return (
            <div className="col-4" key={index}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
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



export default Post;
