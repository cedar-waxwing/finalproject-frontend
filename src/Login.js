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
        <>
            <div className="col-4">
            <br></br>
                <h2 className="text-dark">
                    Log In
                </h2>
                <br></br>
                <form onSubmit={userLogin} >
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</h3>
                        <input value={loginData.username || ""} onChange={handleInputChange} name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputPassword1" className="form-label text-dark">Password</h3>
                        <input value={loginData.password || ""} onChange={handleInputChange} name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-dark text-light">Submit</button>
                    &nbsp;
                    &nbsp;
                    <a href="/main" type="button" className="back btn btn-dark allfont">Back</a>
                </form>
            </div>
            {props.success &&
                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Login successful!</h4>
                    <hr></hr>
                    <p className="mb-0">You will be redirected back to the homepage in {props.ms} seconds.</p>
                </div>}
        </>
    );
}



export default Login;
