import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

// Routes
globalRouter.get(routes.home, (req,res) => res.send("Home!!"));

export default globalRouter;