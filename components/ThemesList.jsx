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
          {theme.map((them) => (
            <button type='button'>
              <Theme them={them} key={them.id} />
            </button>
          ))}
        </div>

      </Layout>
    </div>
  );
};
