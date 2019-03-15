class LLNode {
    constructor(value) {
        this.isHead = false
        this.value = value
        this.nextNode = null
    }
}

function llGetPreviousNode(node){
    let checkNode = this.head
    let isEndOfList = false
    while(!isEndOfList) {
        if(checkNode.nextNode===node) break
        checkNode = checkNode.nextNode
        isEndOfList = checkNode === null
    }
    return checkNode
}

// head = LLNode { value=null, isHead = true }
// last = LLNode { nextNode=null }
module.exports = class LinkedList {
    constructor(){
        this.head = new LLNode(null)
        this.head.isHead = true
        this.currentSize = 0
    }

    size(){
        return this.currentSize
    }

    find(value){
        let checkNode = this.head
        let isEndOfList = false
        while(!isEndOfList) {
            if(checkNode.value===value && !checkNode.isHead) return checkNode
            checkNode = checkNode.nextNode
            isEndOfList = checkNode === null
        }
        return null
    }

    last(){
        let node = this.head
        let isLast = false
        while(!isLast) {
            isLast = node.nextNode === null
            if(isLast) return node
            node = node.nextNode
        }
        return node
    }

    push(value){
        let pushNode = new LLNode(value)
        let lastNode = this.last()
        let isListEmpty = lastNode.isHead
        if(isListEmpty) {
            this.head.nextNode = pushNode
        } else {
            lastNode.nextNode = pushNode
        }
        this.currentSize++
        return this
    }

    // previousNode deleteNode nextNode
    delete(value){
        let deleteNode = this.find(value)
        if(deleteNode === null) return false
        let previousNode = llGetPreviousNode.bind(this)(deleteNode)
        previousNode.nextNode = deleteNode.nextNode
        this.currentSize--
        return true
    }

    insert(value, previousNode, nextNode){
        if(previousNode.nextNode !== nextNode) return false
        let newNode = new LLNode(value)
        previousNode.nextNode = newNode
        newNode.nextNode = nextNode
        this.currentSize++
        return true
    }
}