import Express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import logger from './utilities/logger';

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

logger(app);
router(app);

app.listen(PORT, () => console.log(`Magic happening @ http://localhost:${PORT}`)); // eslint-disable-line no-console

export default app;
