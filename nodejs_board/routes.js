// Global
const HOME = "/";
const SEARCH = "/search";

// Board Posts
const POSTS = "/posts";
const POST_DETAIL = "/:id";
const ADD_POST = "/add";
const EDIT_POST = "/:id/edit";
const DELETE_POST = "/:id/delete";

const routes = {
    // Global
    home: HOME,
    search: SEARCH,

    // Board Posts
    posts: POSTS,
    postDetail: id => {
        if (id) {
            return `/posts/${id}`;
        }
        else {
            return POST_DETAIL;
        }
    },
    postAdd: ADD_POST,
    postEdit: EDIT_POST,
    postDelete: DELETE_POST
}

export default routes;