const React = require('react');
const Layout = require('./Layout');

// const Product = require('./Product');

module.exports = function Main({title}) {
  return (
    <div>
      <Layout title={title}>
        <div className="main">
          <img
            className="img"
            src="https://static.tildacdn.com/tild6135-3364-4837-a566-636330346362/quizplease-presentat.png"
            alt="Quiz"
          />
          <form action="http://localhost:3000/themes" target="_blank">
            <button id="btn" class="animate__animated animate__flipInY">
              <i> Играем ?</i>
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};
