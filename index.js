const { createServer } = require('http');

const PORT = process.env.PORT || 3000;
const logger = console;

const server = createServer((req, res) => {
  logger.info(new Date().toISOString(), req.headers);
  res.writeHead(301, { 'Location': 'https://www.emplo.jp' });
  res.end();
});

server.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
