class TNode {
    constructor(value){
        this.value=value
        this.leftNode=null
        this.rightNode=null
    }
}

function addRecursiveToTreeNode(currentNode, value){
    if(currentNode===null) return new TNode(value)
    if(currentNode.value===value) return currentNode
    if(value>currentNode.value){
        // insert to right side of current Node
        currentNode.rightNode = addRecursiveToTreeNode(currentNode.rightNode, value)
    } else {
        // insert to left side of current Node
        currentNode.leftNode = addRecursiveToTreeNode(currentNode.leftNode, value)
    }
    return currentNode
}

function findNodeFromNodeTree(currentNode, value) {
    let foundNode = null
    if(currentNode.value===value) return currentNode
    if(value>currentNode.value){
        // find in right Node of current Node
        foundNode = findNodeFromNodeTree(currentNode.rightNode, value)
    }else {
        // find in left Node of current Node
        foundNode = findNodeFromNodeTree(currentNode.leftNode, value)
    }
    return foundNode
}

function deleteNodeFromCurrentNode(currentNode, value) {
    if(currentNode===null) return null
    if(currentNode.value===value) {
        return null
    }
    if(value>currentNode.value){
        // find and delete in right Node of current Node
        currentNode.rightNode = deleteNodeFromCurrentNode(currentNode.rightNode, value)
    }else {
        // find and delete in left Node of current Node
        currentNode.leftNode = deleteNodeFromCurrentNode(currentNode.leftNode, value)
    }
    return currentNode
}

module.exports = class Tree {
    constructor(){
        this.root = new TNode(null)
    }

    add(value){
        this.root = addRecursiveToTreeNode(this.root, value)
    }

    find(value){
        return findNodeFromNodeTree(this.root, value)
    }

    delete(value){
        deleteNodeFromCurrentNode(this.root, value)
    }
}