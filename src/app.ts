import express, { Application } from 'express';
import morgan from 'morgan';

import {Config} from '../config/config';

import IndexRouter from './routes/index.routes';
import PostRouter from './routes/post.routes';

export class App {
    private app: Application

    constructor(private port?: number|string) {
        this.app = express();
        this.settings();//initialize in port config
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/posts', PostRouter);
        this.app.use(IndexRouter);
    }

    settings() {
        this.app.set('port', Config.port || this.port)
    }

    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`Server running in port: ${this.app.get('port')}`);
    }
}