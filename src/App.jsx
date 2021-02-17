import React from 'react'
import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import Login from './component/pages/login/Login'
import Home from './component/pages/blog/Home'
import Post from './component/pages/blog/Post'
import Dashboard from './component/pages/dashboard/Dashboard'
import { PrivateRoute } from './component/PrivateRoute'
import { withAlert } from 'react-alert'
import { history } from './component/History'
import UpdatePost from "./component/pages/blog/UpdatePost";
import Profile from "./component/pages/profile/Profile";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component = {props => <Login {...props} alert={this.props.alert} />} />
                        <PrivateRoute path="/dashboard/:userName" component={props => <Dashboard {...props} alert={this.props.alert} />} />
                        <PrivateRoute path="/profile/:userName" component={Profile} />
                        <Route path="/post/:id" component={props => <Post {...props} alert={this.props.alert} /> } />
                        <Route path="/update-post/:id" component={UpdatePost} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default withAlert()(App)
