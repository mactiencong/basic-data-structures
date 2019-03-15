class STNode {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }
}

module.exports = class Stack {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    // node1 <- node2 <- root <<== newNode
    push(value){
        let newNode = new STNode(value)
        newNode.nextNode = this.root // newNode.nextNode == current root
        this.root = newNode // new root = newNode
    }

    // node1 <- node2 <- root
    pop(){
        let popedValue = this.root.value
        this.root = this.root.nextNode // root = node2
        return popedValue
    }

    peek(){
        return this.isEmpty()? null : this.root.value
    }
}