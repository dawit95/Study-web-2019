import express from "express";
// Routers
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import postRouter from "./routers/postRouter";

const app = express();
const PORT = 3000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

// routers
app.use(routes.home, globalRouter);
app.use(routes.posts, postRouter);

app.listen(PORT, handleListening);