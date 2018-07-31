// This can be replaced by something like https://www.npmjs.com/package/morgan
import { appendFile } from 'fs';

const file = './logs/transactions.log';

export default function logger(app) {
  app.use((req, res, next) => {
    const log = `[${new Date()}] Url: ${req.url} Params: ${JSON.stringify(req.params)}\r\n`;
    appendFile(file, log, (err) => {
      if (err) {
        console.error('Error on logging transaction', err); // eslint-disable-line no-console
      }
    });
    next();
  });
}
