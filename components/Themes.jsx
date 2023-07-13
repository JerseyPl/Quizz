const React = require("react");
const Layout = require("./Layout");
const Navbar = require("./Navbar");

// const Product = require('./Product');

module.exports = function Themes({ title }) {
  return (
    <div>
      <Layout title={title}>
        <Navbar />
        <div className="Themes">vcx</div>
      </Layout>
    </div>
  );
};
