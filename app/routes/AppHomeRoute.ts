import {MovingAverages} from "../controllers/MovingAverages";





export  class AppHomeRoute {
    public technicalIndicator:MovingAverages =new MovingAverages();

    public routes(app:any):void{



        app.route('/sma')
            .get(this.technicalIndicator.sma);
        app.route('/ema')
            .get(this.technicalIndicator.ema);

    }

}
