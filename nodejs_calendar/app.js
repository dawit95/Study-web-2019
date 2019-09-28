import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import postRouter from "./routers/postRouter";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.posts, postRouter);

export default app;