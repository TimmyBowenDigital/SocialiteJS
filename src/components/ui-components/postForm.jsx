import React, { Suspense } from "react";
import '../../App.css'

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            posts: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        this.setState((state) => {
            return {post: value}
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('this was the Post that was submitted: ' + this.state.post);
        const target = event.target;
        const value = target.value;

        this.setState((state) => {
            return {posts: value}
        });
    }

    render() {
        return (
            <form>
                <input type={'text'} name={'post'} placeholder={'Please enter your post here'} onChange={this.handleInputChange} />
                <input type={'submit'} name={'submit'} onClick={this.handleSubmit}/>
            </form>
        );
    }
}

export default PostForm