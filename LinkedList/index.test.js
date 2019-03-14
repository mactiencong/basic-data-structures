const ll = require('./index')

let linkList = new ll.LinkedList()

console.log(linkList)

// 1. push
console.log('Push')
linkList.push(1)
linkList.push(2)
linkList.push(3)

console.log(linkList)
console.log('Push')

// 2. find
console.log('Find')
console.log(linkList.find(2))
console.log('Find')
// 3. delete
console.log('Delete')
linkList.delete(2)
console.log(linkList)
console.log('Detele')

// 4. insert
console.log('Insert')
linkList.insert(4, linkList.find(1), linkList.find(3))

console.log(linkList)
console.log('Insert')
