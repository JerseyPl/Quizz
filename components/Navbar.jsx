const React = require("react");

module.exports = function Navbar({ user }) {
  return (
    <nav>
      <div class="nav-wrapper">
        <div>QUIZ</div>
        {/* <img src="https://png.pngtree.com/png-vector/20210502/ourmid/pngtree-quiz-png-transparent-background-png-image_3257718.jpg" class="brand-logo">
          {user}
        </img> */}
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/themes">Темы</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
