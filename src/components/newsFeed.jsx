import React, { UseState} from "react";
import PostForm from "./ui-components/postForm";
import '../App.css'

function NewsFeed() {
    return (
      <div>
          <h1>News Feed</h1>
          <div className={'PostBox'}>
              <PostForm />
          </div>
          <div className={'post-list'}>
              <h3>here are all the posts?</h3>
          </div>
      </div>
    );
}

export default NewsFeed