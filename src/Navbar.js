import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


const Navbar = (props) => {

    return (

        <nav className="navbar">
            <div className="container-fluid">
                <a className="logo display-1 text-light text-decoration-none" href="/main">&nbsp; EQUIP</a>
                {/* <div className="text-dark allfont"></div> */}
                {props.loggedOut &&
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Logged out!</h4>
                    </div>}
                <form className="d-flex">
                    <div className="card-body ">
                        {!props.token ?
                            <>
                                <Link to="/login" className="btn btn-clear text-light">Log in</Link>
                                &nbsp;
                                <Link to="/signup" className="btn btn-clear text-light">Sign up</Link>
                            </> : <>
                                <h2 className="allfont text-end"> Welcome, {props.userData.name}</h2>
                                <button onClick={props.logout} type="button" className="btn btn-clear text-light">Logout</button>
                                &nbsp;
                                <a href="/mypage" className="btn btn-clear text-light" role="button">Manage my Posts</a>
                            </>
                        }
                    </div>
                </form>
            </div>
        </nav>
    );
}


export default Navbar;