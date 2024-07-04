const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App').default;

const app = express();
const port = 9000;

app.use(express.static(path.resolve(__dirname, '../server')));

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR with React</title>
        <script src="/bundle-client.js" async defer></script>
    </head>
    <body>
        <div id="root">${app}</div>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
