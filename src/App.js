import React, { useState, useEffect } from 'react';
import Main from "./Main.js"
import Signup from "./Signup.js"
import Login from "./Login.js"
import { BrowserRouter as Router, Link, Switch, Route, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';

function App() {
  let history = useHistory();
  const [success, setSuccess] = useState(false)
  console.log(history)

  const [token, setToken] = useState("");
  //need another state here for the userdata -- once navigate back to the page, it should still say "Hello Rachel!" etc.

  //just need another of these functions that deletes token for logout
  function saveToken(token) {
    setToken(token)
    window.localStorage.setItem("token", token)
    getUser(token)
    //use react router hook, useHistory -- will take you to a specific page anywhere in the site. Helpful if you have logged in and want to take ther person somewhere else. 
  }

  function logout() {
    axios({
      method: 'get',
      url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout',
      headers: { "Authorization": "Bearer " + token }
    })
      .then(function (response) {
        setToken("")
        window.localStorage.removeItem("token")
        setUser({})
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
      url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user',
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
      setSuccess(false)
      history.push("/main")
      clearInterval(countdown);
      console.log("interval")
    }, 3000)
  }



  return (
    <>
      {/* this is where any other code would go  */}
      <Switch>
        <Route exact path={["/main", "/"]}>
          <Main userData={userData} token={token} logout={logout} />
        </Route>
        <Route path="/signup">
          <Signup saveToken={saveToken} success={success} handleSuccess={handleSuccess} />
        </Route>
        <Route path="/login">
          <Login saveToken={saveToken} success={success} handleSuccess={handleSuccess} />
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