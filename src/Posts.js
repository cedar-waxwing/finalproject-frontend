import React, { useState } from 'react';
import axios from 'axios';
import { axiosHelper } from "./axiosHelper";
import { BrowserRouter as Link, useHistory } from 'react-router-dom'



function deleteSuccess() {
    window.history.push('/mypage')
}

function deletePost(e, id, props) {
    e.preventDefault()
    axiosHelper({
        method: 'get',
        route: `/api/destroy/${id}`,
        token: props.token,
        successMethod: deleteSuccess,
    })
}


const Posts = ({ postData, userData }) => {
    console.log(userData)
    console.log(postData)
    const mappedPosts = postData && postData.map((post, index) => <div className="col-12" key={index}>
        <div className="card border-end-0 border-start-0 border-bottom-0">
            <div className="card-body allfont cardback">
                <img className="imageproperties" src={post.image}></img>
                <br></br>
                <br></br>
                {userData.id === post.user_id && <button className="btn btn-danger" onClick={deletePost}>Delete</button>}
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
