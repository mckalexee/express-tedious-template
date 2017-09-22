import * as express from 'express';

export class Server {
  private _app: express.Application;

  constructor() {
    this._app = express();
  }

  start(port: number | string) {
    this._app.listen(port, () => {
      console.log('Server Listening on port:', port);
    });
  }

}
