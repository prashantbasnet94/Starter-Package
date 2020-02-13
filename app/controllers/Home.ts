import {Response} from "express";
const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: 'ABBXWiCIBjYtiybb7RHXv1KM52zc5c6ZwVWrYO3FoUCnWH40jloIW7csVCywP8Q8',
    APISECRET: 'DSzbo5YNTsViNNQ84sdwNiLEMkn1WVqEz8cW3DUICMpVBKLin40xctCi4OzhwwSh'
});

export class Home {


    async test(req:any,res:any){
        let ticker = await binance.prices();
        console.log(`Price of BNB: ${ticker.BNBUSDT}`);
        res.send(ticker.BNBUSDT);
    }



}

