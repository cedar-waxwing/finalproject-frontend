import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Posts = ({ postData }) => {
    console.log(postData)
    const mappedPosts = postData && postData.map((post, index) => <div className="col-12" key={index}>
        <div className="card border-0">
            <div className="card-body allfont cardback">
                <img src={post.image}></img>
                <br></br>
                <Link to={`/post/${post.id}`} className="card-title postdisplay text-dark text-decoration-none" >{post.title}</Link>
                <p className="card-text">{post.description}</p>
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
