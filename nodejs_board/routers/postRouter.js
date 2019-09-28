import express from "express";
import routes from "../routes";
import { postDetail,
         postEdit,
         postDelete, 
         getPostAdd,
         postPostAdd } from "../controllers/postController";

const postRouter = express.Router();

// Routes
postRouter.get(routes.postAdd, getPostAdd);
postRouter.post(routes.postAdd, postPostAdd)

postRouter.get(routes.postDetail(), postDetail);
postRouter.get(routes.postEdit, postEdit);
postRouter.get(routes.postDelete, postDelete);


export default postRouter;