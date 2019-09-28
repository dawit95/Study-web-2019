import routes from "./routes";

export const localMiddlewares = (req, res, next) => {
    res.locals.siteName = "Web Study";
    res.locals.routes = routes;
    next();
}