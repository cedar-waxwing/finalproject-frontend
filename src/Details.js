import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'


const Details = (props) => {
    const { id } = useParams()
    console.log(id)
    const post = props.postData.find(item => item.id === parseInt(id))

    return (
            <>    
            <div className="col-1">
            <a href="/main" type="button" className="back btn btn-success allfont">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
            </svg>
            </a>
            </div>
            <div className="col-11">
                <div className="card border-0">
                    <div className="card-body allfont">
                        <h1 className="card-title">{post.title}</h1>
                        &nbsp;
                        <h2 className="card-text">{post.description}</h2>
                        &nbsp;
                        <h3 className="card-text">${post.price}</h3>
                        &nbsp;
                        <h3 className="card-text">{post.contact}</h3>
                    </div>
                </div>
            </div>
            </>
    );
}



export default Details;