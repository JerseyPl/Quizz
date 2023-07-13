const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const Theme = require('./Theme');

// const Product = require('./Product');

module.exports = function ThemesList({ title, themes }) {
  return (
    <div>
      <Layout title={title}>
        <Navbar />
        {themes.map((theme) => (
          <Theme theme={theme} key={theme.id} />
        ))}
      </Layout>
    </div>
  );
};
