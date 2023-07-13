const React = require('react');

// const Product = require('./Product');

module.exports = function Theme({ theme }) {
  return (
    <div>
      <h1>{theme.theme}</h1>
    </div>
  );
};
