import express from "express";
// Routers
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import postRouter from "./routers/postRouter";
// Local Middlewares
import { localMiddlewares } from "./localMiddlewares";

const app = express();
const PORT = 3000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

// Use Pug
app.set("view engine", "pug");

// Local Middlewares
app.use(localMiddlewares);

// routers
app.use(routes.home, globalRouter);
app.use(routes.posts, postRouter);

app.listen(PORT, handleListening);