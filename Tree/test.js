const Tree = require('./index')
const tree = new Tree()

// 1. add
tree.add(1)
tree.add(2)
tree.add(5)
tree.add(3)
tree.add(2)
tree.add(4)

console.log(JSON.stringify(tree))

// 2. find
console.log(JSON.stringify(tree.find(5)))

// 3. delete

tree.delete(3)

console.log(JSON.stringify(tree))