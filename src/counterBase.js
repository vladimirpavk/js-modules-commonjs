class Counter{
    constructor(){
        this.ticks = 0;
    }
    getTicks = ()=>this.ticks;
    setTicks = (value)=>this.ticks = value;
}

let counter = new Counter();
let sharedName = 'Vladimir';

module.exports = {
    'counter': counter,
    'sharedName': sharedName
}