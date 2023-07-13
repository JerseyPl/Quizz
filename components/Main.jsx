const React = require('react');
const Layout = require('./Layout');

// const Product = require('./Product');

module.exports = function Main({title}) {
  return (
    <div>
      <Layout title={title}>
        <div className="main">
          <img
            src="https://prime-event.com.ua/wp-content/uploads/2020/12/Kviz-onlai-n.jpg"
            alt="Quiz"
          />
          \
        </div>
      </Layout>
    </div>
  );
};
