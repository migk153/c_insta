import React, { Component } from "react";
import SignupForm from "./presenter";

//const Container = props => <SignupForm {...props} />;

class Container extends Component{
    state = {
        email: "",
        fullname: "",
        username: "",
        password: ""
    }
    render(){
        const {email, fullname, username, password} = this.state;
        return <SignupForm
         emailValue={email}
         fullnameValue={fullname}
         usernameValue={username}
         passwordValue={password}
         handleInputChange={this._handleInputChange}
         handleSubmit={this._handleSubmit}
         handleFacebookLogin={this._handleFacebookLogin}
         />
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({            
            [name]: value
        });
        console.log(this.state);
    }

    _handleSubmit = event => {
        event.preventDefault();
    }

    _handleFacebookLogin = response =>{
        console.log(response)
    }
}

export default Container;