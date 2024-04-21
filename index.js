const http = require('http');

const logger = console;
const PORT = process.env.PORT || 3000;

const app = (req, res) => {
  logger.info(new Date().toISOString(), req.headers);
  res.writeHead(301, { 'Location': 'https://jsx.jp' });
  res.end();
};

const main = async () => {
  const server = http.createServer(app);
  const options = {
    host: '0.0.0.0',
    port: PORT,
  };
  server.listen(options, () => {
    logger.info(JSON.stringify({
      Server: 'Started',
      'Listen on': `http://127.0.0.1:${options.port}`,
    }, null, 2));
  });
};

module.exports = {
  server: main(),
};
