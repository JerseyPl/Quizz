const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function Game({title}) {
  return (
    <div>
      <Layout title={title}>
        <Navbar />
        <div className="Game">Game</div>
      </Layout>
    </div>
  );
};
