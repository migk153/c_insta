import React, { Component } from "react";
import LoginForm from "./presenter";
import PropTypes from "prop-types";


//const Container = props => <LoginForm {...props} />;

class Container extends Component{
    state = {
        username: "",
        password: ""
    };
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        usernameLogin: PropTypes.func.isRequired
    };
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
    };

    _handleSubmit = event => {
        const { usernameLogin } = this.props;
        const { username, password } = this.state;
        event.preventDefault();
        usernameLogin(username, password)
        // redux action
    };

    _handleFacebookLogin = response => {
        // redux action
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    };
}



export default Container;