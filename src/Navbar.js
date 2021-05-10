import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


const Navbar = (props) => {

    return (
       
        <nav className="navbar navbar-light">
            <div className="container-fluid">
            <banner className="logo display-1">&nbsp; EQUIP</banner>
            {/* <div className="text-dark allfont"></div> */}
                <form className="d-flex">
                    <div className="card-body ">
                        {!props.token ?
                            <>
                                <Link to="/login" className="btn btn-clear">Log in</Link>
                                &nbsp;
                                <Link to="/signup" className="btn btn-clear">Sign up</Link>
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