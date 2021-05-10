import React, { useState, useEffect } from 'react';
import Main from "./Main.js"
import Signup from "./Signup.js"
import Login from "./Login.js"
import Create from "./Create.js"
import Details from "./Details.js"
import Mypage from "./Mypage.js"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import { BrowserRouter as Router, Link, Switch, Route, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
import { axiosHelper } from "./axiosHelper";

function App() {
  let history = useHistory();
  const [success, setSuccess] = useState(false)
  const [loggedOut, setLoggedOut] = useState(false)
  const [ms, setMs] = useState(3)

  const [token, setToken] = useState("");
  //need another state here for the userdata -- once navigate back to the page, it should still say "Hello Rachel!" etc.

  //just need another of these functions that deletes token for logout
  function saveToken(token) {
    setToken(token)
    window.localStorage.setItem("token", token)
    getUser(token)
    setLoggedOut(false)
    setMs(3)
    //use react router hook, useHistory -- will take you to a specific page anywhere in the site. Helpful if you have logged in and want to take ther person somewhere else. 
  }

  function handleLogout(response) {
    setToken("")
    window.localStorage.removeItem("token")
    setUser({})
    setLoggedOut(true)
    setInterval(() => setLoggedOut(false), 3000)

  }

  function logout() {
    axiosHelper({
      route: '/api/logout',
      token,
      successMethod: handleLogout
    })
  }

  //post of didMount. 
  useEffect(() => {
    let lstoken = window.localStorage.getItem("token")
    if (lstoken) {
      saveToken(lstoken)
    }
  }, [])


  //save userdata
  const [userData, setUser] = useState({})

  function saveUser(res) {
    setUser(res.data)
  }

  function getUser(token) {
    axiosHelper({
      method: 'get',
      route: '/api/user',
      token,
      successMethod: saveUser
    })
  }

  //This function returns a successful login/signup notice if the user is successful in logging in/signing up. 
  const handleSuccess = () => {
    let countdown = null;
    setSuccess(true)
    countdown = setInterval(() => {
      setMs(prevMs => {
        if (prevMs <= 1) {
          setSuccess(false)
          history.push("/main")
          clearInterval(countdown)
        }
        return prevMs - 1
      })
    }, 1000)
  }

  //_____________________________________
  //getting all posts from API 

  const [postData, setPost] = useState([])

  function savePost(res) {
    setPost(res.data);
  }

  function getPosts() {
    axiosHelper({
      method: 'get',
      route: '/api/posts/all',
      successMethod: savePost
    })
  }
  //this runs the function onmount.
  useEffect(() => {
    getPosts()
  }, [])

  //_____________________________________

  return (
    <>
    <Navbar userData={userData} token={token} logout={logout} loggedOut={loggedOut}/>
      <div className="container">
        <div className="row">
          {/* this is where any other code would go  */}
          <Switch>
            <Route exact path={["/main", "/"]}>
              <Main userData={userData} token={token} logout={logout} loggedOut={loggedOut} postData={postData} />
            </Route>
            <Route path="/signup">
              <Signup saveToken={saveToken} success={success} handleSuccess={handleSuccess} ms={ms} />
            </Route>
            <Route path="/login">
              <Login saveToken={saveToken} success={success} handleSuccess={handleSuccess} ms={ms} />
            </Route>
            <Route exact path={["/create"]}>
              <Create token={token} />
            </Route>
            <Route path={["/post/:id"]}>
              <Details postData={postData} />
            </Route>
            <Route path={["/mypage"]}>
              <Mypage userData={userData} token={token}/>
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default function AppWithRouter() {
  return (
    <>
      <Router>
        <App />
        {/* put footer here  */}
      </Router>
    </>
  )
}