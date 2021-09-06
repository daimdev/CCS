import {Config} from './lib/serverConfiguration';
import {BuyerRoutes} from './features/Buyer/buyerRoutes';

let app = new Config().getApp();
const Buyerroute = new BuyerRoutes(app)
Buyerroute.getAllBuyerRoutes()
export {app};