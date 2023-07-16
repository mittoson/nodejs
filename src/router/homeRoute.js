import express from"express";
import homeController from "../controllers/homeController";
const route = express.Router();

const initRouteWeb = async (app)=>{
    app.get('/',homeController.getUser)


    return app.use('/',route)
}

export default initRouteWeb