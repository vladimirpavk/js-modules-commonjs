class Counter{
    constructor(){
        this.ticks = 0;
    }
    getTicks = ()=>this.ticks;
    setTicks = (value)=>this.ticks = value;
}

module.exports = {
    'Counter' : new Counter()
}