import React, { useState } from 'react';
import axios from 'axios';
import { axiosHelper } from "./axiosHelper";


const Create = (props) => {
    const [postData, setPostData] = useState({})

    function postCreation(e) {
        e.preventDefault()
        axiosHelper({
            method: 'post',
            route: '/api/post/create',
            data: postData,
            token: props.token,
        })
    }

    const handlePost = e => setPostData(previousState => ({ ...previousState, [e.target.name]: e.target.value }));

    return (
            <div className="col-4">
                <form onSubmit={postCreation}>
                    <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">Title</label>
                        <input value={postData.title || ""} onChange={handlePost} name="title" type="text" className="form-control" id="inputTitle"></input>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <input value={postData.description || ""} onChange={handlePost} name="description" type="text" className="form-control" id="inputDescription"></input>
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="inputPrice" className="form-label">Price</label>
                        <span className="input-group-text">$</span>
                        <input value={postData.price || ""} onChange={handlePost} name="price" type="text" className="form-control" id="inputPrice" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="inputContact" className="form-label">Contact</label>
                        <input value={postData.contact || ""} onChange={handlePost} name="contact" type="text" className="form-control" id="inputContact"></input>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    );
}



export default Create;
