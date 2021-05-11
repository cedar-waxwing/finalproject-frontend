import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'


const Details = (props) => {
    const { id } = useParams()
    console.log(id)
    const post = props.postData.find(item => item.id === parseInt(id))

    return (
        <>
            <div className="col-11">
                <div className="card border-0">
                    <div className="card-body allfont">
                        <h1 className="card-title">{post.title}</h1>
                        &nbsp;
                        <img src={post.image}></img>
                        <br></br>
                        &nbsp;
                        <h2 className="card-text">{post.description}</h2>
                        &nbsp;
                        <h3 className="card-text">${post.price}</h3>
                        &nbsp;
                        <h3 className="card-text">{post.contact}</h3>
                    </div>
                </div>
                <a href="/main" type="button" className="back btn btn-dark allfont">Back</a>
            </div>
        </>
    );
}



export default Details;