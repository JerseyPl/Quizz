const router = require("express").Router();
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const mainRouter = require("./main.route");

router.use("/", mainRouter);

module.exports = router;
