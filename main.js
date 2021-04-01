const { Point } = require("./point")
const { Human } = require('./classinfo')

const alice   = new Human ('Alice', 'Liddell', 28, ['html', 'css', 'javascript', 'solidity', 'php'])
const bob     = new Human('Bob', 'Lemon', 30, ['javascript', 'solidity', 'python'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Html', 'css'])

alice.printInfo()
console.log(charlie.canVote())
console.log(bob.mostSkilledDev(alice))


  // p1 est une instance de Point
  const p1 = new Point(1, 2)
  // p2 est une autre instance de Point
  const p2 = new Point(10, 11)

  console.log(p1.distance(p2))