import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import AddUpdate from './components/add_update';
import AddProject from './components/add_project';
import HomeContainer from './components/home_container';
import Login from './components/login';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCCCSykmLoV2Y3it2gzw59mdf-i8oTQ9Eg",
  authDomain: "liovinci-1356.firebaseapp.com",
  databaseURL: "https://liovinci-1356.firebaseio.com",
  storageBucket: "liovinci-1356.appspot.com",
  messagingSenderId: "654401154117"
});

function requireAuth(nextState, replace) {
  if((firebase.auth().onAuthStateChanged(function(user) {
      if (user === null) {
        return true;
      };
  }))){
    console.log("user has to sign in");
    replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
    });
  }
};

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} onEnter={requireAuth} />
        <Route path="login" component={Login} />
        <Route path="addUpdate/:id" component={AddUpdate} onEnter={requireAuth} />
        <Route path="addProject" component={AddProject} onEnter={requireAuth} />
    </Route>
);
