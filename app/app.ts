// app/app.ts
import express, {Response} from "express";
import bodyParser from "body-parser";
 import {AppHomeRoute} from "./routes/AppHomeRoute";


let framework = require('express')(),
    http = require('http').Server(framework),




// for auth





    class App {
    public app: express.Application;

    public  homeRoute: AppHomeRoute= new AppHomeRoute();
        constructor() {
         this.app = express();
         this.app.use(require("express-session")({
            secret: "It looks like there aren't any great matches for your search",
            resave: false,
            saveUninitialized: false
        }));


        this.config();
        // this.app.use(this.auth.isLoggedIn)
        this.homeRoute.routes(this.app);


    }

        private config(): void{
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");         
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");         
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set("view engine","ejs");
         this.app.use(express.static("public"));
     }
}


export default new App().app;
