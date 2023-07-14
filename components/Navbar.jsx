const React = require('react');

module.exports = function Navbar({}) {
  return (
    <nav>
      <div className="nav-wrapper purple lighten-1">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="text" href="/themes">
              <i>Темы</i>
            </a>
          </li>
          <li>
            <a className="text" href="/">
              <i>На главную</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
