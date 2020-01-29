import React, { Suspense } from "react";
import '../../App.css'
import {Button} from 'react-bootstrap';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postText: "",
            userID: "",
            postTime: "",
            posts: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        this.setState((state) => {
            return {postText: value}
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this was the Post that was submitted: ' + this.state.post);

        const post = {
            postText: this.state.postText,
            userID: 'TimmyTheGamer', //TODO add when doing logins
            postTime: new Date()
        };

        this.setState(() => {
            return {posts: post}
        });

    }


    render() {
        return (
            <div className={"jumbotron jumbotron-fluid my-4"}>
                <h2>Please enter your Post for everyone!!</h2>
                <form>
                    <input type={'text'} name={'post'} placeholder={'Please enter your post here'} value={this.state.post} onChange={this.handleInputChange} />
                    <input type={'submit'} name={'submit'} onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default PostForm