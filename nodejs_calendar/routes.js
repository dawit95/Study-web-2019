
const HOME = "/";
const SEARCH = "/search";

const POSTS = "/posts";
const ADD_POST = "/add"
const POST_DETAIL = "/:id";

const EDIT_POST = "/:id/edit";
const DELETE_POST = "/:id/delete";

const routes = {
    // Global

    home : HOME,
    search : SEARCH,

    // POSTS
    posts : POSTS,
    addPost : ADD_POST,
    editPost : EDIT_POST,
    postDetail : POST_DETAIL,
    deletePost : DELETE_POST

}

export default routes;