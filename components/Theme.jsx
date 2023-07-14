const React = require('react');



module.exports = function Theme({ them }) {
  console.log(them,'=========');
  return (
    <a href={`/themes/${them.id}/question/0`}>
    <button>
      <h1>{them.theme}</h1>
    </button>
    </a>

  );
};
