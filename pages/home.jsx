import React, { Suspense } from "react";
import '../App.css'
import NavPanel from "../components/navPanel";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Messages from "./messages";
import FeaturesPage from "./features";
import UserProfile from "./userProfile";
import NewsFeed from "../components/newsFeed";

class HomePage extends React.Component {
    render() {
        return (
            <div className={'ContentPanel'}>
                <NavPanel/>
                <div className={'HomeContentContainer'}>
                    <Router>
                        <Route exact path={'/'}>
                            <NewsFeed />
                        </Route>
                        <Route path={'/messages'}>
                            <Messages />
                        </Route>
                        <Route path="/features">
                            <FeaturesPage />
                        </Route>
                        <Route path="/profile">
                            <UserProfile />
                        </Route>
                    </Router>
                </div>
            </div>
        );
    }
}

export default HomePage