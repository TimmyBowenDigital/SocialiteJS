import React, { UseState} from "react";
import PostForm from "./ui-components/postForm";
import '../App.css'
import { getPosts } from '../scripts/dataCollection'
import PostFeed from "./postFeed";


class NewsFeed extends React.Component {
    render() {
        return (
            <div>
                <h1>News Feed</h1>
                <div className={'PostBox'}>
                    <PostForm />
                </div>
                <div className={'post-list'}>
                    <PostFeed />
                </div>
            </div>
        );
    }
}

export default NewsFeed