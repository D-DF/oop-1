class Human {
    constructor(firstName, lastName, age, language) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
        this.language  = language;
    }

    printInfo() {
        console.log(`Prenom : ${this.firstName}, nom : ${this.lastName}, age : ${this.age}`);
    }

    canVote = () => {
        if(this.age >= 18) {
            return true
        } else {
            return false
        }
    }

    mostSkilledDev = (personn2) => {
        const lang  = this.language.length;
        const lang2 = personn2.language.length;
    
        if(lang > lang2) {
            return this.firstName
        } else if (lang < lang2) {
            return personn2.firstName
        } else {
            return 'draw'
        }
    }
}

const alice   = new Human('Alice', 'Liddell', 28, ['html', 'css', 'javascript', 'solidity', 'php'])
const bob     = new Human('Bob', 'Lemon', 30, ['javascript', 'solidity', 'python'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Html', 'css'])

alice.printInfo()
console.log(charlie.canVote())
console.log(bob.mostSkilledDev(alice))

