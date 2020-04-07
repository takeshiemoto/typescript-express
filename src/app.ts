import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import routerConfig from './routes';

// Creat Express server
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routerConfig(app);

app.set('port', 3000);

export default app;
