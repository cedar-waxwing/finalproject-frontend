import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { axiosHelper } from "./axiosHelper";
import Posts from "./Posts.js"
import Navbar from "./Navbar.js"
import Create from "./Create.js"
import Mypage from "./Mypage.js"


function Main(props) {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchData, setSearchData] = useState([]);

    const searchResult = (res) => {
        console.log(res);
        setSearchData(res.data);
    }

    //don't need to send token if not in middleware
    function searchPosts(e) {
        console.log(searchQuery)
        e.preventDefault()
        axiosHelper({
            method: 'post',
            route: '/api/search',
            data: { search: searchQuery },
            successMethod: searchResult
        })
    }

    const handleSearch = e => setSearchQuery(e.target.value);
    console.log(searchQuery)


    const mappedSearch = searchData && searchData.map((post, index) => <div className="col-12" key={index}>
        <div className="card border-0">
            <div className="card-body allfont cardback">
                <Link to={`/post/${post.id}`} className="card-title postdisplay text-dark text-decoration-none">{post.title}</Link>
                <p className="card-text">{post.description}</p>
            </div>
        </div>
    </div>
    )

    return (
        <>
            {/* break for distance from nav bar */}
            <div><br></br></div>
            <h2 className="col-3 text-dark allfont align-self-center">
                <i>List & find equipment in USEA Area VIII </i>
            </h2>

            {/* <video playsinline autoplay muted loop id="myVideo">
                <source src="dronefootage.mp4" type="video/mp4"></source>
            </video> */}
            {/* carousel */}
            <div id="carouselExampleCaptions" className="col-9 carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="skytest.png" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="test.png" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="test.png" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* end carsousel */}
            <body class="background">
                <div className="col-12">
                <div><br></br></div>
                    <form className="mx-auto text-end" onSubmit={searchPosts}>
                        <input value={searchQuery} onChange={handleSearch} type="text" name="search"></input>
                    &nbsp;
                    <button className="btn btn-dark text-light" type="submit">Search</button>
                    </form>
                    {searchData.length ?
                    <>
                        {mappedSearch}
                    </> : <>
                        <Posts postData={props.postData} />
                    </>
                }
                </div>
                {props.loggedOut &&
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Logged out!</h4>
                    </div>}
            </body>
        </>
    );
}

export default Main;