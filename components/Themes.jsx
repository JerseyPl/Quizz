const React = require('react');
const Layout = require('./Layout');
const Navbar = require('')

// const Product = require('./Product');

module.exports = function Themes({ title }) {
  return (
    <div>
      <Layout title={title}>
        <Navbar/>
        <div className="Themes">

        </div>
      </Layout>
    </div>
  );
};
