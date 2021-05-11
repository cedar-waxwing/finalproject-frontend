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
            <div className="col-4">
            &nbsp;
            <h1 className="allfont">Posts I've Created</h1>
                <Posts postData={myPostData} />
            </div>
            <div className="col-4">
                <div className="card border-white" >
                    <div className="card-body">
                        <a href="/create" className="btn btn-dark" role="button">Create Post</a>
                        &nbsp;
                        &nbsp;
                        <button type="button" className="btn btn-dark"> Saved Posts </button>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mypage;