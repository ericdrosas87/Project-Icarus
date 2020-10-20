import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Map from "./component/Map";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Wrapper from "./component/Wrapper";
import Landing from "./component/Landing";
import Info from "./component/Info";
import Store from "./component/Store";
import UserInterface from './component/UserInterface'
import Profile from './component/Profile'

import { useStateValue } from "./utils/StateProvider";
import { auth } from "./config/firebaseDB";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      }else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, [])

  console.log("user is >>>", user);
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Wrapper>
          <Switch>
            <Route path="/about">
              <Info />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/store">
              <Store />
            </Route>
            <Route path="/myaccount">
              <Switch>
                <Route>
                  <UserInterface />
                </Route>
                <Route path='/edit'>
                  <Profile/>
                </Route>
              </Switch>
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
