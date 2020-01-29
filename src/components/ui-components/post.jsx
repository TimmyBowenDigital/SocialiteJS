import React from "react";
import '../../App.css'
import PostFeed from '../postFeed';

class Post extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'container'}>
                    <PostFeed id={this.props.post.postText} />
                </div>
            </div>
        );
    }
}

export default Post;