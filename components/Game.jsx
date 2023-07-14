const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function Game({ title, index, question }) {
  return (
    <div>
      <Layout title={title}>
        <Navbar />
        <div className="Game">{question.question}</div>
        <button className="nextQuest">Следующий вопрос</button>
        <form action="/" method="GET">
          <input name="answer" placeholder="Ваш ответ" />
          <button className="youAnswer">Ответить</button>
        </form>
        <h3>Ваш ответ правильный или нет</h3>
      </Layout>
    </div>
  );
};
