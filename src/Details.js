import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'


const Details = (props) => {
    const { id } = useParams()
    console.log(id)
    const post = props.postData.find(item => item.id === parseInt(id))

    return (
        <div className="row">
            <div className="col-12">
            <a href="/main" type="button" class="back btn btn-primary">Back</a>
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">{post.title}</p>
                        <p className="card-text">{post.description}</p>
                        <p className="card-text">${post.price}</p>
                        <p className="card-text">{post.contact}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Details;