import React from "react";
import 'react-bootstrap';
import {BrowserRouter as Router} from "react-router-dom";

class UserDetails extends React.Component {
    render() {
        return(
            <div>
                <h3>this is the user details</h3>
                <img alt={"This is an image"}/>
                <p>Testing stuff</p>
            </div>
        )
    }
}

export default UserDetails