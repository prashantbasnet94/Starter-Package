import {Home} from "../controllers/Home";





export  class AppHomeRoute {
    public home:Home =new Home();

    public routes(app:any):void{



        app.route('/test')
            .get(this.home.test);

    }

}
