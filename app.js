require("@babel/register");
const morgan = require("morgan");
const express = require("express");
const ssr = require("./middleware/renderComponent");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(ssr);


app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server started");
});
