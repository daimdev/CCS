import {Config} from './lib/serverConfiguration';
import {Routes} from './routes/Routes';

let app = new Config().getApp();
const route = new Routes(app);
route.getAllRoutes();
export {app};