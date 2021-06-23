import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Login from './dashboard/auth/login';
import SignUp from './dashboard/auth/signup';
import Home from './pages/home';
import About from './pages/about';

import DashboardHome from './dashboard/dashboard';
import NewListing from './dashboard/add-listing';
import Listings from './dashboard/listings';
import Reviews from './dashboard/reviews';
import Profile from './dashboard/profile';
import AgentsList from './pages/agents-list';
import AgentsGrid from './pages/agents-grid';
import AgentDetails from './pages/agent-details';
import ListingGrid from './pages/listing-grid';
import MapGrid from './pages/map-grid';
import NotFound from './pages/not-found';
import PasswordRecovery from './dashboard/auth/password-recovery';
import Listing from './pages/listing/listing';

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/login" component={Login}  exact/>
                <Route path="/signup" component={SignUp}  exact/>
                <Route path="/dashboard" component={DashboardHome} exact />
                <Route path="/new-property" component={NewListing}  exact/>
                <Route path="/listings" component={Listings} exact/>
                <Route path="/reviews" component={Reviews} exact/>
                <Route path="/profile" component={Profile} exact/>
                <Route path="/agents-list" component={AgentsList} exact/>
                <Route path="/agents-grid" component={AgentsGrid} exact/>
                <Route path="/agents/single" component={AgentDetails} exact/>
                <Route path="/listing" component={ListingGrid} exact/>
                <Route path="/map-grid" component={MapGrid} exact/>
                <Route path="/recover-password" component={PasswordRecovery} exact/>
                <Route path="/listing-one" component={Listing} exact/>
                <Route component={NotFound} />
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
