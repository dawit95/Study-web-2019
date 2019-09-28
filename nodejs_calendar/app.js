import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import postRouter from "./routers/postRouter";

const app = express();

// routers
app.use(routes.home, globalRouter);
app.use(routes.posts, postRouter);

export default app;