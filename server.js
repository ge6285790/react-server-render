import express from 'express';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import compression from 'compression';
import path from 'path';
import config from './webpack.dev.config';

const compiler = webpack(config);

const app = express();

// app.use(compression());

const PORT = process.env.PORT || 9000;

app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  // stats: { colors: true },
}));

// app.use(WebpackHotMiddleware(compiler, {
//   log: console.log,
// }));
app.use(WebpackHotMiddleware(compiler));

// app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
