import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Posts from "./Posts.js"
import Navbar from "./Navbar.js"
import Create from "./Create.js"
import Mypage from "./Mypage.js"

function Main(props) {


    return (
<>
            <div className="col-4">
                <Posts postData={props.postData}/>
            </div>
            <div className="col-3">
                <div className="card border-white" >
                    <div className="card-body">
                        {!props.token ?
                            <>
                                <Link to="/login" className="btn btn-primary">Log in</Link>
                                &nbsp;
                                <Link to="/signup" className="btn btn-primary">Sign up</Link>
                            </> : <>
                                <h1> Welcome {props.userData.name}</h1>
                                <button onClick={props.logout} type="button" className="btn btn-primary">Logout</button> 
                                &nbsp;
                                <a href="/mypage" className="btn btn-primary" role="button">Manage my Posts</a>
                                </>
                        }

                    </div>
                </div>
            </div>
            {props.loggedOut &&
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Logged out!</h4>
                </div>}
        </>
    );
}

export default Main;