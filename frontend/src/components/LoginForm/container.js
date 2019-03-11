import React, { Component } from "react";
import LoginForm from "./presenter";


//const Container = props => <LoginForm {...props} />;

class Container extends Component{
    state = {
        username: "",
        password: ""
    }
    render(){
        const { username, password } = this.state;
        return <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        usernameValue={username}
        passwordValue={password}/>;
    }

    _handleInputChange = event => {
        //console.log(event.target.value, event.target.name);
        const { target : { value, name }} = event;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = event => {
        event.preventDefault();
        // redux action
    }

    _handleFacebookLogin = response => {
        // redux action
        console.log(response)
    }
}



export default Container;