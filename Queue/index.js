const ds = require('../index')
module.exports = class Queue {
    constructor(){
        this.stackOne = new ds.Stack()
        this.stackTwo = new ds.Stack()
    }

    enQueue(value){
        this.stackOne.push(value)
    }

    deQueue(){
        if(this.stackOne.isEmpty() && this.stackTwo.isEmpty()) return false
        if(this.stackTwo.isEmpty()) {
            while(!this.stackOne.isEmpty()) {
                this.stackTwo.push(this.stackOne.pop())
            }
        }
        this.stackTwo.pop()
    }
}
