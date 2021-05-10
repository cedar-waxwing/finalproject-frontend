import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Posts from "./Posts.js"
import Navbar from "./Navbar.js"
import Create from "./Create.js"
import { axiosHelper } from './axiosHelper.js';

function Mypage(props) {

    //here, do an api call that calls all the posts that this user ID has created 

    const [myPostData, setMyPost] = useState([])

    function saveMyPost(res) {
        setMyPost(res.data);
    }

    function getMyPosts() {
        axiosHelper({
            method: 'get',
            route: '/api/posts/my',
            successMethod: saveMyPost,
            token: props.token
        })
    }

    //this runs the function onmount.
    useEffect(() => {
        getMyPosts()
    }, [props.token])

    //then, we can do a delete option for all posts this user ID has created. 

    return (
        <>
            <div className="col-1">
            <a href="/main" type="button" className="back btn btn-success allfont">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
            </svg>
            </a>
            </div>
            <div className="col-4">
            <h1 className="allfont">Posts I've Created</h1>
                <Posts postData={myPostData} />
            </div>
            <div className="col-4">
                <div className="card border-white" >
                    <div className="card-body">
                        <a href="/create" className="btn btn-success" role="button">Create Post</a>
                        <br></br>
                        <button type="button" className="btn btn-success"> Saved Posts </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mypage;