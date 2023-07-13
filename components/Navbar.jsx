const React = require("react");

module.exports = function Navbar({  }) {
  return (
    <nav>
      <div className="nav-wrapper">
 
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/themes">Темы</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
