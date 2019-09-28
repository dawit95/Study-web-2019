import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/globalController";

const globalRouter = express.Router();

// Routes
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

export default globalRouter;