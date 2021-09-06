import * as express from 'express'
import * as path from 'path'
import * as getBuyerRoutes from './buyerController'
import * as nunjucks from 'nunjucks'

//@BuyerService allows Buyer Router

export class BuyerRoutes{
    private app: express.Application;
    private message : String

    constructor(app: express.Application){
        this.app = app;
        this.setDir();           
    }

    private setDir(): void{
        this.app.use(express.static('views'));
        this.app.set('view engine', 'njk');
        nunjucks.configure('views', {
            autoescape: true,
            express: this.app
        });

    }


    //all of the get Routings
    // @All Post Routes need to be Added Here 
    private getRoutings(): void {
        this.app.get('/', getBuyerRoutes.BuyerController.BuyerView )
    }   


    //all of the post Routings
       // @All Post Routes need to be Added Here 
    private postRoutings(): void {

    }

    

    //all of the Server Routings
    public getAllBuyerRoutes(): void {
        this.getRoutings();
    }


}