import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Home from './FrontPages/Home';
import About from './FrontPages/About';

import DashboardHome from './Dashboard/DashboardHome';
import NewListing from './Dashboard/newListing';
import Listings from './Dashboard/listings';
import Reviews from './Dashboard/reviews';
import Profile from './Dashboard/profile';

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={SignUp} exact />
                <Route path="/dashboard" component={DashboardHome} exact />
                <Route path="/new-property" component={NewListing} exact />
                <Route path="/listings" component={Listings} exact />
                <Route path="/reviews" component={Reviews} exact />
                <Route path="/profile" component={Profile} exact />
            </Switch>
        </div>
    );
}

export default App();

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, 
        document.getElementById('app'));
}
