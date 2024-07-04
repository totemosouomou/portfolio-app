const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

// // シンプルな"Hello World"メッセージを表示するExpressサーバーのコード
// app.get('*', (req, res) => {
//   res.send('Hello World');
// });

// Reactのビルドされた静的ファイルを提供する
app.use(express.static(path.join(__dirname, '../dist')));

// すべてのリクエストに対してindex.htmlを返す
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
