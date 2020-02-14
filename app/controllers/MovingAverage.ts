export  class MovingAverage {
    calculateMovingAverage(data:any,MovingAverageOf:number):number{
        let ma=data.close.slice(Math.max(data.close.length-MovingAverageOf,1))
        const sum = ma.reduce((a, b) => a + b, 0);
        return (sum / ma.length) || 0;
    }
}