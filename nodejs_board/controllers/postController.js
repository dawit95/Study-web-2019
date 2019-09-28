import routes from "../routes";

export const postDetail = (req,res) => {
    res.render("postDetail", { pageTitle: "Post Detail" });
}

export const getPostAdd = (req,res) => {
    res.render("add", { pageTitle: "Add Post" });
}
export const postPostAdd = (req, res) => {
    // TO DO
    // INSERT POST INTO DATEBASE
    res.send("postPostAdd");
}

export const postEdit = (req,res) => {
    res.render("editPost", { pageTitle: "Edit Post" });
}
export const postDelete = (req,res) => {
    res.render("deletePost", { pageTitle: "Delete Post" });
}