import express from 'express';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import compression from 'compression';
import config from './webpack.dev.config';
import isomorphic from './server/middleware/isomorphic';

const compiler = webpack(config);
const app = express();
// app.use(compression());
const PORT = process.env.PORT || 9000;

app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
}));

app.use(WebpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  isomorphic(req, res);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

/* <script>window.$i18n = ${serialize(i18nClient)}</script> */
