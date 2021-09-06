import * as express from 'express'
import * as path from 'path'
import * as getRoutes from './Routing/homeController'
import * as nunjucks from 'nunjucks'


export class Routes{
    private app: express.Application;
    private message : String

    constructor(app: express.Application){
        this.app = app;
        this.setDir();           
    }

    private setDir(): void{
        this.app.use(express.static('public'));
        this.app.set('view engine', 'njk');
        nunjucks.configure('views', {
            autoescape: true,
            express: this.app
        });
    }


    //all of the get Routings
    // @All Post Routes need to be Added Here 
    private getRoutings(): void {
        this.app.get('/', getRoutes.getRoutings.Welcome )
    }   


    //all of the post Routings
       // @All Post Routes need to be Added Here 
    private postRoutings(): void {

    }

    

    //all of the Server Routings
    public getAllRoutes(): void {
        this.getRoutings();
    }


}