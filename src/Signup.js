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
        <div className="row">
            <div className="col-4">
                <div>
                    SIGN UP
                </div>
                <form onSubmit={userRegistration}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input value={registrationData.name || ""} onChange={handleInputChange} name="name" type="name" className="form-control" id="exampleInputName1"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={registrationData.email || ""} onChange={handleInputChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input></div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={registrationData.password || ""} onChange={handleInputChange} name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {props.success &&
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Signup successful!</h4>
                    <hr></hr>
                    <p className="mb-0">You will be redirected back to the homepage in {props.ms} seconds.</p>
                </div>}
        </div>
    );
}

export default Signup;
