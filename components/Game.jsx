const React = require("react");
const Layout = require("./Layout");
const Navbar = require("./Navbar");

module.exports = function Game({ title, index, question }) {
  return (
    <div>
      <Layout title={title}>
        <Navbar />

        <div className="Game">{question.question}</div>

        <a href={`/themes/${question.themeId}/question/${index}`}>
          <button className="nextQuest">Следующий вопрос</button>
        </a>
        <form
          action={`/answer`}
          className="inputAnswer"
          method="POST"
          data-id={question.id}
        >
          <input name="answer" placeholder="Ваш ответ" />
          <button className="youAnswer">Ответить</button>
        </form>
        <h3 className="answerResult"></h3>
      </Layout>
    </div>
  );
};
