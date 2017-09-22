import * as express from 'express';
import {Routes} from './routes/routes';

export class Server {
  private _app: express.Application;

  constructor() {
    this._app = express();
    this._app.use(Routes);
  }

  start(port: number | string) {
    this._app.listen(port, () => {
      console.log('Server Listening on port:', port);
    });
  }

}
