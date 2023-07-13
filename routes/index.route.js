const router = require("express").Router();
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const mainRouter = require("./main.route");
const themesRouter = require("./themes.route");

router.use("/", mainRouter);
router.use("/themes", themesRouter);
module.exports = router;
