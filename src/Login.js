import React, { useState } from 'react';
import axios from 'axios';
import { axiosHelper } from "./axiosHelper";

const Login = (props) => {
    const [loginData, setLoginData] = useState({})

    function successHandler(res) {
        props.saveToken(res.data.access_token);
        props.handleSuccess()
    }

    function userLogin(e) {
        console.log(loginData)
        e.preventDefault()
        axiosHelper({
            method: 'post',
            route: '/oauth/token',
            data: {
                grant_type: "password",
                client_id: "2",
                client_secret: "0d6izzZa9m5pSZD6joTzywGQFeaNo7FbINMPm8QM",
                scope: "",
                ...loginData
            },
            successMethod: successHandler
        })
    }

    const handleInputChange = e => setLoginData(previousState => ({ ...previousState, [e.target.name]: e.target.value }));


    return (
        <div className="row">
            <div className="col-4">
                <div>
                    LOG IN
                </div>
                <form onSubmit={userLogin} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={loginData.username || ""} onChange={handleInputChange} name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={loginData.password || ""} onChange={handleInputChange} name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {props.success &&
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Login successful!</h4>
                    <hr></hr>
                    <p className="mb-0">You will be redirected back to the homepage in {props.ms} seconds.</p>
                </div>}
        </div>
    );
}



export default Login;
