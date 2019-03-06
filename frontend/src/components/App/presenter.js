import React from 'react';  // { Component } deleted
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import './styles.module.scss';
import Footer from "components/Footer";
import Auth from "components/Auth";

// class App extends Component {
//   render() {
//     return (
//       <div className={styles.app}>
//         <Switch>
//             <Route exact path="/" render={() => "hello!"} />
//             <Route exact path="/login" render={() => "Logged in"} />
//             <Route path="/login/aaa" render={() => "aaa"} />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }
// Because we will use a stateless component

const App = props => [
    // Nav

    // Routers
    props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,   // Priv :   // Public
    <Footer key={3} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" render={() => "feed"} />,
        <Route path="/explore" render={() => "explore"} />
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />,
        <Route path="/recover" render={() => "forgot password"} />
</Switch>
)

export default App;
