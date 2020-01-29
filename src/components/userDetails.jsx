import React from "react";
import 'react-bootstrap';
import {BrowserRouter as Router} from "react-router-dom";
import PostFeed from "../components/postFeed";

class UserDetails extends React.Component {
    render() {
        return(
            <div>
                <h3>this is the user details</h3>
                <img alt={"This is"}/>
                <div className={'container'}>
                    <div className={'container'}>
                        <p>{this.props.user.userID}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails