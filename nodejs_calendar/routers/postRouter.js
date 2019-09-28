import express from "express";
import routes from "../routes";

const postRouter = express.Router();


// Routes
postRouter.get(routes.addPost, (req, res) => res.send("Add Post"));
postRouter.get(routes.editPost, (req, res) => res.send("Edit Post"));
postRouter.get(routes.postDetail, (req, res) => res.send("Post Detail"));
postRouter.get(routes.deletePost, (req, res) => res.send("Delete Post"));


export default postRouter;