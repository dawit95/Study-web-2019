import express from "express";
import routes from "../routes";
import { posts,
    postDetail,
    postAdd,
    postEdit,
    postDelete } from "../controllers/postController";

const postRouter = express.Router();

// Routes

postRouter.get(routes.posts,posts);
postRouter.get(routes.postAdd,postAdd);
postRouter.get(routes.postDetail,postDetail);
postRouter.get(routes.postEdit,postEdit);
postRouter.get(routes.postDelete,postDelete);


export default postRouter;