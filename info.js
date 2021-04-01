const alice = {
    firstName: "Alice",
    lastName: "Liddell",
    age: 28,
    language: ['html', 'css', 'javascript', 'solidity', 'php']
}

const bob = {
    firstName: "Bob",
    lastName: "Lemon",
    age: 30,
    language: ['javascript', 'solidity', 'python']
}

const charlie = {
    firstName: "Charlie",
    lastName: "Charlot",
    age: 8,
    language: ['Html', 'css']
}

const prinInfo = (personne) => {
    console.log(`Prenom : ${personne.firstName}, nom : ${personne.lastName}, age : ${personne.age}`);
}

prinInfo(alice)
prinInfo(bob)
prinInfo(charlie)

const canVote = (personne) => {
    if(personne.age >= 18) {
        return true
    } else {
        return false
    }
}
console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))

const mostSkilledDev = (personne1, personne2) => {
    const lang  = personne1.language.length;
    const lang2 = personne2.language.length;

    if(lang > lang2) {
        return personne1.firstName
    } else if (lang < lang2) {
        return personne2.firstName
    } else {
        return 'draw'
    }
}

console.log(mostSkilledDev(alice, bob))
console.log(mostSkilledDev(alice, charlie))
console.log(mostSkilledDev(bob, charlie))
