const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const Theme = require('./Theme');

// const Product = require('./Product');

module.exports = function ThemesList({ title, theme }) {
  console.log(theme, '---------');
  return (
    <div>
      <Layout title={title}>
        <Navbar />
        {theme.map((them) => (
          <Theme them={them} key={them.id} />
        ))}
      </Layout>
    </div>
  );
};
