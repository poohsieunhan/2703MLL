import express from 'express';

let router = express.Router();

let initWebRouter = (app)=>{
    router.get("/",(rq,re)=>{
        return re.send("Welcome to linhdd Web");
    })
    return app.use("/",router);
}


module.exports = initWebRouter;