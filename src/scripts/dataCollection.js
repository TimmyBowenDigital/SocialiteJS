import '../mock/posts';
import posts from '../mock/posts';
const _ = require("lodash");

function getPosts() {
    return posts;
}

function getPostById(id) {
    let allPosts = getPosts();
    let individualPost = _.find(allPosts, {"postID": id });
    return individualPost;
}

function addPost(newPostData) {
    let postData = getPosts();
    let obj = JSON.parse(postData);
    obj.table.push(newPostData);
    let postJSON = JSON.Stringify(obj);
    posts.push(postJSON);
}

export default getPosts;




