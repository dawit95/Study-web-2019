import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("Home") );
globalRouter.get(routes.search, (req, res) => res.send("Search") );

export default globalRouter;