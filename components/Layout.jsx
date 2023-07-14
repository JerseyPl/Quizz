const React = require('react');

module.exports = function Layout({title, children}) {
  return (
    <div className="title">
      <html lang="en">
        <head>
          <title>{title}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link rel="stylesheet" href="/css/style.css" />
        </head>

        <body>{children}</body>
      </html>
    </div>
  );
};
