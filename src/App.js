import React, { useState, useEffect } from 'react';
import Main from "./Main.js"
import Signup from "./Signup.js"
import Login from "./Login.js"
import Create from "./Create.js"
import Post from "./Post.js"
import { BrowserRouter as Router, Link, Switch, Route, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';

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
    //use react router hook, useHistory -- will take you to a specific page anywhere in the site. Helpful if you have logged in and want to take ther person somewhere else. 
  }

  function logout() {
    axios({
      method: 'get',
      url: 'http://finalprojectbackend-rachelehlers1288217.codeanyapp.com/api/logout',
      headers: { "Authorization": "Bearer " + token }
    })
      .then(function (response) {
        setToken("")
        window.localStorage.removeItem("token")
        setUser({})
        setLoggedOut(true)
        setInterval(()=>setLoggedOut(false), 3000)

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //post of didMount. 
  useEffect(() => {
    let lstoken = window.localStorage.getItem("token")
    if (lstoken) {
      saveToken(lstoken)
    }
  }, [])


  const [userData, setUser] = useState({})

  function getUser(token) {
    axios({
      method: 'get',
      url: 'http://finalprojectbackend-rachelehlers1288217.codeanyapp.com/api/user',
      data: { token },
      headers: { "Authorization": "Bearer " + token }
    })
      .then(function (response) {
        setUser(response.data);

      })
      .catch(function (error) {
        console.log(error);
      });
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
          clearInterval(countdown);
          console.log("interval")
        }
        return prevMs-1
      })
    }, 1000)
  }

//_____________________________________
//getting all posts from API 

const [postData, setPost] = useState([])

function getPosts() {
  axios({
    method: 'get',
    url: 'http://finalprojectbackend-rachelehlers1288217.codeanyapp.com/api/posts/all',
    // data: { token },
    // headers: { "Authorization": "Bearer " + token }
  })
    .then(function (response) {
      setPost(response.data);
      console.log(response)

    })
    .catch(function (error) {
      console.log(error);
    });
}
//this runs the function onmount.
useEffect(()=>{
  getPosts()
},[])

console.log(postData)
//_____________________________________

  return (
    <>
      {/* this is where any other code would go  */}
      <Switch>
        <Route exact path={["/main", "/"]}>
          <Main userData={userData} token={token} logout={logout} loggedOut={loggedOut} postData={postData}/>
        </Route>
        <Route path="/signup">
          <Signup saveToken={saveToken} success={success} handleSuccess={handleSuccess} ms={ms}/>
        </Route>
        <Route path="/login">
          <Login saveToken={saveToken} success={success} handleSuccess={handleSuccess} ms={ms}/>
        </Route>
        <Route exact path={["/create"]}>
          <Create  />
        </Route>
      </Switch>
    </>
  );
}

export default function AppWithRouter() {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  )
}