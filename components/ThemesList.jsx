const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const Theme = require('./Theme');

// const Product = require('./Product');


module.exports = function ThemesList({title, theme}) {

  return (
    <div>
      <Layout title={title}>
        <Navbar />

        <div className='themes'>
          {theme.map((theme) => (
            <button type='button'>
              <Theme theme={theme} key={theme.id} />
            </button>
          ))}
        </div>

      </Layout>
    </div>
  );
};
