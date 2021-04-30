import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function Main(props) {

    return (
        <div className="row">
            <div className="col-4">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Main page</h5>
                        <p className="card-text">Welcome to my website!</p>

                        {!props.token ?
                            <>
                                <Link to="/login" className="btn btn-primary">Log in</Link>
                                &nbsp;
                                <Link to="/signup" className="btn btn-primary">Sign up</Link>
                            </> : <> 
                            <h1> Welcome {props.userData.name}</h1>
                            <button onClick={props.logout} type="button" className="btn btn-primary">Logout</button> </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;