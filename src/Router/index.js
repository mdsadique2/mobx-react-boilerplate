import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import AppStore from 'Store'

import Home from 'Pages/Home'
import Search from 'Pages/Search'

import App  from '../App';


export default class RouterComp extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/home" />)}/>
                        <Route exact path="/home" 
                            render={() => {
                                return <Home store={AppStore.homeStore} />
                            }}
                        
                        />
                        <Route exact path="/search" 
                            render={() => {
                                return <Search store={AppStore.searchStore} />
                            }}
                        
                        />
                        <Redirect to="/404" />
                    </Switch>
                </ App>
            </Router>
        );
    }
}
