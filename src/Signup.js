import React, { useState } from 'react';
import axios from 'axios';
import { axiosHelper } from "./axiosHelper";


const Signup = (props) => {
    const [registrationData, setRegistrationData] = useState({})

    function signupHandler(res) {
        props.saveToken(res.data.data.token);
        props.handleSuccess()
    }

    function userRegistration(e) {
        e.preventDefault()
        axiosHelper({
            method: 'post',
            route: '/api/register',
            data: registrationData,
            successMethod: signupHandler
        })
    }

    const handleInputChange = e => setRegistrationData(previousState => ({ ...previousState, [e.target.name]: e.target.value }));

    return (
        <>
            <div className="col-4">
            <br></br>
                <h2>
                    Sign Up
                </h2>
                <br></br>
                <form onSubmit={userRegistration}>
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputName1" className="form-label">Name</h3>
                        <input value={registrationData.name || ""} onChange={handleInputChange} name="name" type="name" className="form-control" id="exampleInputName1"></input>
                    </div>
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Email address</h3>
                        <input value={registrationData.email || ""} onChange={handleInputChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input></div>
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputPassword1" className="form-label">Password</h3>
                        <input value={registrationData.password || ""} onChange={handleInputChange} name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                    &nbsp;
                    &nbsp;
                    <a href="/main" type="button" className="back btn btn-dark allfont">Back</a>
                </form>
            </div>
            {props.success &&
                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Signup successful!</h4>
                    <hr></hr>
                    <p className="mb-0">You will be redirected back to the homepage in {props.ms} seconds.</p>
                </div>}
        </>
    );
}

export default Signup;
