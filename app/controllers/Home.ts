import {Response} from "express";
const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: 'ABBXWiCIBjYtiybb7RHXv1KM52zc5c6ZwVWrYO3FoUCnWH40jloIW7csVCywP8Q8',
    APISECRET: 'DSzbo5YNTsViNNQ84sdwNiLEMkn1WVqEz8cW3DUICMpVBKLin40xctCi4OzhwwSh'
});

export class Home {


    async test(req:any,res:any){
        let ticker = await binance.prices();

        //console.log(ticker)
        binance.prices('', (error:any, ticker:any) => {
           // console.log("Price of BNB: ", ticker);
        });


        binance.prevDay(false, (error:any, prevDay:any) => {
            // console.log(prevDay); // view all data
            for ( let obj of prevDay ) {
                let symbol = obj.symbol;
                if(obj.priceChangePercent<-20 ){
                  //  console.log(symbol+" volume:"+obj.volume+" change: "+obj.priceChangePercent+"%");
                }

            }
        });

        // Intervals: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M
        binance.candlesticks("BNBBTC", "5m", (error:any, ticks:any, symbol:any) => {
            console.log("candlesticks()", ticks);
            let last_tick = ticks[ticks.length - 1];
            let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
            console.log(symbol+" last close: "+close);
            console.log(symbol+" high: "+high);

        }, {limit: 500, endTime: 1514764800000});


        binance.trades("ETHBTC", (error:any, trades:any, symbol:any) => {
           // console.log(symbol+" trade history", trades);
            res.send(symbol+"  trade history   "+trades);

        });

    }



}

