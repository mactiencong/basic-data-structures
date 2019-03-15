const ds = require('..');
test('add 1 to linked list', () => {
  const myLinkedList = new ds.LinkedList()
  myLinkedList.push(1)
  expect(myLinkedList.last().value).toBe(1)
})