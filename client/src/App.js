import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './component/Login'
import Contact from './component/Contact'
import Map from './component/Map'
import Landing from './component/Landing'
import {useStateValue} from './utils/StateProvider'
import {auth} from './config/firebaseDB'



function App() {

  const [{user}, dispatch] = useStateValue()

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

  console.log("user is >>>", user)

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path='/map'>
          <Map/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/'>
          <Landing/>
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
