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
          <div className="form1">
            <form
              action={`/answer`}
              className="inputAnswer"
              method="POST"
              data-id={question.id}
            >
              <input className="input" name="answer" placeholder="Ваш ответ" />
              <button className="youAnswer">Ответить</button>
            </form>
          </div>
          <h3 className="answerResult"></h3>
        </div>
      </Layout>
    </div>
  );
};
