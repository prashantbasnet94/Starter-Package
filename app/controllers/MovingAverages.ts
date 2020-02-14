import {Response} from "express";
 const technicalindicators = require('technicalindicators');

const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: 'ABBXWiCIBjYtiybb7RHXv1KM52zc5c6ZwVWrYO3FoUCnWH40jloIW7csVCywP8Q8',
    APISECRET: 'DSzbo5YNTsViNNQ84sdwNiLEMkn1WVqEz8cW3DUICMpVBKLin40xctCi4OzhwwSh'
});


 export class MovingAverages {

     sma(req:any,res:any):void {
        let sendSma;
        let sendArray=[];
         binance.websockets.chart("BTCUSDT", "1d", (symbol, interval, chart) => {
            let tick = binance.last(chart);
            const last = chart[tick].close;
             let ohlc = binance.ohlc(chart);
             //blue
            let sma9 = technicalindicators.sma({period:9,values:ohlc.close}).pop();
              //green
            let sma13 = technicalindicators.sma({period:13,values:ohlc.close}).pop();
              //yellow
            let sma21 = technicalindicators.sma({period:21,values:ohlc.close}).pop();
             //red
            let sma55 = technicalindicators.sma({period:55,values:ohlc.close}).pop();
              if(sma9>sma13 && sma9>sma21 && sma9>sma55     &&  sma13>sma21 && sma13>sma55     &&     sma21>sma55){
                  //invest
                   sendSma={
                      'strategy':'true',
                      '9':sma9,
                      '13':sma13,
                      '21':sma21,
                      '55':sma55
                  }
              }else{
                  sendSma={
                      'strategy':'false',
                      '9':sma9,
                      '13':sma13,
                      '21':sma21,
                      '55':sma55
                  }
              }

              sendArray.push(sendSma)
            res.send(sendSma)

        });
    }

    ema(req:any,res:any):void{

         let sendEma;

        binance.websockets.chart("BTCUSDT", "1d", (symbol, interval, chart) => {
            let tick = binance.last(chart);
            const last = chart[tick].close;
            let ohlc = binance.ohlc(chart);
            //blue
            let ema9 = technicalindicators.ema({period:9,values:ohlc.close}).pop();
            //green
            let ema13 = technicalindicators.ema({period:13,values:ohlc.close}).pop();
            //yellow
            let ema21 = technicalindicators.ema({period:21,values:ohlc.close}).pop();
            //red
            let ema55 = technicalindicators.ema({period:55,values:ohlc.close}).pop();

            console.log(ema9,ema13,ema21,ema55)
            if(ema9>ema13 && ema9>ema21 && ema9>ema55     &&  ema13>ema21 && ema13>ema55     &&     ema21>ema55){
                //invest
                sendEma={
                    'strategy':'true',
                    '9':ema9,
                    '13':ema13,
                    '21':ema21,
                    '55':ema55
                }
            }else{
                sendEma={
                    'strategy':'false',
                    '9':ema9,
                    '13':ema13,
                    '21':ema21,
                    '55':ema55
                }
            }


            res.send(sendEma)

        });

    }



}

