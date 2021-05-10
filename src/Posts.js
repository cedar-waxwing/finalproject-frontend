import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Posts = ({ postData }) => {
    console.log(postData)
    const mappedPosts = postData && postData.map((post, index) => <div className="col-12" key={index}>
        <div className="card border-0">
            <div className="card-body allfont cardback">
                <Link to={`/post/${post.id}`} className="card-title postdisplay text-light text-decoration-none" >{post.title}</Link>
                {/* <h3 className="card-text">{post.description}</h3> */}
            </div>
        </div>
    </div>

    )
    return (
        <>
            {mappedPosts}
        </>
    )

}



export default Posts;
