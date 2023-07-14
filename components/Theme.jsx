const React = require('react');

// const Product = require('./Product');

module.exports = function Theme({theme}) {
  return (
    <div className="theme">
      <h1>
        <i>{theme.theme}</i>
      </h1>
    </div>
  );
};
