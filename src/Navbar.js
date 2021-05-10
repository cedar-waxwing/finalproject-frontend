import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


const Navbar = (props) => {

    return (
       
        <nav className="navbar navbar-light bg-none">
            <div className="container-fluid">
            <img src="equiry.png"></img>
                <form className="d-flex">
                    <div className="card-body">
                        {!props.token ?
                            <>
                                <Link to="/login" className="btn btn-success">Log in</Link>
                                &nbsp;
                                <Link to="/signup" className="btn btn-success">Sign up</Link>
                            </> : <>
                                <h1 className="allfont text-start"> Welcome, {props.userData.name}</h1>
                                <button onClick={props.logout} type="button" className="btn btn-success">Logout</button>
                                &nbsp;
                                <a href="/mypage" className="btn btn-success" role="button">Manage my Posts</a>
                            </>
                        }
                    </div>
                </form>
            </div>
        </nav>
    );
}


export default Navbar;