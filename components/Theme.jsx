const React = require('react');
const Layout = require('./Layout');

// const Product = require('./Product');

module.exports = function Theme({themes}) {
  return (
    <div>
      <h1>{themes}</h1>
    </div>
  );
};