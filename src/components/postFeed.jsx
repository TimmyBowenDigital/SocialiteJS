import React from "react";
import Post from "./ui-components/post";
import getPosts from "../scripts/dataCollection";

class PostFeed extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let posts = getPosts();

        let postList = posts.map(function(post, index){
            if (index >= 2) {
                return <Post post={post} />;
            } else {
                console.log(index + " tested");
            }

        });
        return postList;
    }
}

export default PostFeed;