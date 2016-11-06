import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {error: false}
  }

  handleSubmit(event) {
    console.log("hi from handleSubmit");
    event.preventDefault();

    const email = this.refs.email.value;
    const pass = this.refs.pass.value;
    let _this = this;

    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      console.log(error);
      if(error){
         console.log("heelo");
      _this.setState({error: true});
      } else {
        console.log("hi from else");

      const location = _this.props.location;

      if (location.state && location.state.nextPathname) {
        console.log(location.state, location.state.nextPathname);
        browserHistory.push(location.state.nextPathname);
      } else {
        browserHistory.push('/');
      }
      }
    });

    // if(firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    //   console.log(error);
    //   if(error != null){
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })){
    //   console.log("heelo");
    //   this.setState({error: true});
    // } else {
    //   const location = this.props.location;
    //
    //   if (location.state && location.state.nextPathname) {
    //     console.log(location.state, location.state.nextPathname);
    //     browserHistory.push(location.state.nextPathname);
    //   } else {
    //     browserHistory.push('/');
    //   }
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
        <label><input ref="pass" placeholder="password" /></label><br />
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    )
  }
}
