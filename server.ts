import {Config} from './www/serverConfiguration'
import {BuyerRoutes} from './src/main/features/Buyer/buyerRoutes';

let app = new Config().getApp();
const Buyerroute = new BuyerRoutes(app)
Buyerroute.getAllBuyerRoutes()
export {app};