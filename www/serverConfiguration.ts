import * as express from 'express';
import {createServer, Server} from 'http';
import * as  config from 'config';
import { Logger } from '@hmcts/nodejs-logging';
import * as cookieParser from 'cookie-parser'
import * as cookieEncrypter from '@hmcts/cookie-encrypter'


const logger = Logger.getLogger('server.ts');

export class Config {
  
    private app: express.Application;
    private port:  String | number;
    private server: Server;
    private readonly serverAddress : String | number  = config.get('PORT');

    //@ Constructor for Server configurations
    constructor(){
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
    }

    //@Message: This Express app is being instantiated 
    private createApp(): void{
        this.app = express();
        this.app.use(express.static("src/main/public"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cookieParser())
        this.app.use(cookieEncrypter(config.get('secrets.cmc.encryptionKey'), {
          options: {
            algorithm: 'aes128'
          }
        }))
    }
    
    private config(): void{
        this.port = process.env.PORT || this.serverAddress;
    }

    private createServer():  void{
        this.server = createServer(this.app);
    }

    //listening to the Express application
    private listen(): void{
      
    this.server.listen(this.port);
    this.server.on("listening", () => {
    let address = this.server.address();
    let addressURI = typeof address === "string" ? address: `http://localhost:${address.port}`;
    logger.info(`Server is up and running on ${addressURI}`);
    });


    this.server.on("error", (Error) => {
        if (Error.stack !== "listen") {
            throw Error;
        }

      let bind =  typeof this.port === "string" ? "Pipe" + this.port : "Port" + this.port;
      switch (Error.name) {
        case "EACESS":
          logger.info('Access denied - Access Denied');
          process.exit(1);
          break;
        case "EADDRINUSE":
         logger.info('Address Already in use');
          process.exit(1);
          break;
        default:
          logger.info(Error);
          throw Error;
      }
    });
    }

    public getApp(): express.Application {
        return this.app;
      }
}