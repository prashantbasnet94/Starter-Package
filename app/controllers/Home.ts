import {Response} from "express";
import {MovingAverage} from "./MovingAverage";
const technicalindicators = require('technicalindicators');

const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: 'ABBXWiCIBjYtiybb7RHXv1KM52zc5c6ZwVWrYO3FoUCnWH40jloIW7csVCywP8Q8',
    APISECRET: 'DSzbo5YNTsViNNQ84sdwNiLEMkn1WVqEz8cW3DUICMpVBKLin40xctCi4OzhwwSh'
});

let ma: MovingAverage = new MovingAverage();

 export class Home {
    async test(req:any,res:any) {
        let ticker = await binance.prices();
        binance.websockets.chart("BTCUSDT", "1d", (symbol, interval, chart) => {
            let tick = binance.last(chart);
            const last = chart[tick].close;
             let ohlc = binance.ohlc(chart);
             //blue

            console.log('\n\n\n\n')
             let sma9 = technicalindicators.sma({period:9,values:ohlc.close}).pop();
             console.log(` 9 : ${ sma9}.`);
             //green
            let sma13 = technicalindicators.sma({period:13,values:ohlc.close}).pop();
             console.log(` 13 : ${ sma13}.`);
             //yellow
            let sma21 = technicalindicators.sma({period:21,values:ohlc.close}).pop();
            console.log(` 21 : ${ sma21}.`);
            //red
            let sma55 = technicalindicators.sma({period:55,values:ohlc.close}).pop();
             console.log(` 55 : ${ sma55}.`);
             
              if(sma9>sma13 && sma9>sma21 && sma9>sma55     &&  sma13>sma21 && sma13>sma55     &&     sma21>sma55){
                  //invest
                  console.log(sma9,sma13,sma21,sma55)
              }




        });


    }








}

