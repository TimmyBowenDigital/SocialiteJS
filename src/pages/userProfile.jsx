import React from "react";
import UserDetails from "../components/userDetails";
import NewsFeed from "../components/newsFeed";

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome back {this.props.user.userID}</h1>
                <div>
                    <UserDetails/>
                </div>
                <div className={'container'}>
                    <NewsFeed id={this.props.user.userID}/>
                </div>
            </div>
        );
    }
}

export default UserProfile