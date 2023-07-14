const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function Game({title, index, question}) {
  return (
    <div>
      <Layout title={title}>
        <Navbar />
        <div className="pole animate__bounce">
          <div className="Game">{question.question}</div>
          <div className="qestion">
            <a href={`/themes/${question.themeId}/question/${index}`}>
              <button className="nextQuest">Следующий вопрос</button>
            </a>
          </div>
          <form className="" action="/" method="GET">
            <input name="answer" placeholder="Ваш ответ" />
            <button className="youAnswer">Ответить</button>
          </form>
          <h3>Ваш ответ правильный или нет</h3>
        </div>
      </Layout>
    </div>
  );
};
