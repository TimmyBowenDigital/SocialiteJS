import React, { UseState} from "react";
import PostForm from "./ui-components/postForm";
import '../App.css'

function NewsFeed() {
    return (
      <div>
          <h1>This is the NEWS FEED!!!!</h1>
          <div className={'PostBox'}>
              <h2>Would you like to make a post?</h2>
              <PostForm />
          </div>

      </div>
    );
}

export default NewsFeed