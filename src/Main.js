import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { axiosHelper } from "./axiosHelper";
import Posts from "./Posts.js"
import Navbar from "./Navbar.js"
import Create from "./Create.js"
import Mypage from "./Mypage.js"


function Main(props) {

    const [searchData, setSearchData] = useState("")

    const searchResult = (res) => {
        console.log(res)
    }

    //don't need to send token if not in middleware
    function searchPosts(e) {
        console.log(searchData)
        e.preventDefault()
        axiosHelper({
            method: 'post',
            route: '/api/search',
            data: { search: searchData },
            successMethod: searchResult
        })
    }

    const handleSearch = e => setSearchData(e.target.value);
    console.log(searchData)


    // const mappedSearch = searchData && searchData.map((post, index) => <div className="col-12" key={index}>
    //     <div className="card">
    //         <div className="card-body">
    //             <Link to={`/post/${post.id}`} className="card-title">{post.title}</Link>
    //             <p className="card-text">{post.description}</p>
    //         </div>
    //     </div>
    // </div>
    // )

    return (
        <>
            <div className="col-12">
            <form className="mx-auto" onSubmit={searchPosts}>
                    <input value={searchData} onChange={handleSearch} type="text" name="search"></input>
                    &nbsp;
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
                {/* {searchData ?
                    <>
                        {mappedSearch}
                    </> : <>
                        <Posts postData={props.postData} />
                    </>
                } */}
                <Posts postData={props.postData} />
            </div>
            {props.loggedOut &&
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Logged out!</h4>
                </div>}
        </>
    );
}

export default Main;