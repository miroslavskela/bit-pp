class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    print(){
       return `${this.name} ${this.surname}`
    }

 
}

class Programmer extends Person{
    constructor(name, surname, languages = []){
        super(name, surname);
        this.languages = languages;
    }

    print(){
        return `knows ${this.languages.join(" and ")} !!`
         
    }

    learnedNewLanguage(language) {
        this.languages.push(language)
    }
}

class FootbalPlayer extends Person {
    constructor(name, surname, gamesPlayed = 0) {
        super(name, surname)
        this.gamesPlayed = gamesPlayed
    }

    print() {
        return `played ${this.gamesPlayed}`
    }
}

var programmer1 = new Programmer("Vuk", "Ivanovic")
var programmer2 = new Programmer("milorad", "Ivanovic")
var programmer3 = new Programmer("miroslav", "Ivanovic")
var fudbaler1 = new FootbalPlayer("luka", "Ivanovic")
var fudbaler2 = new FootbalPlayer("jelena", "Ivanovic")



// console.log(programmer1.printProgrammerData());
// programmer1.learnedNewLanguage("kotlin");
// console.log(programmer1.printProgrammerData());


    newArr = []
    newArr.push(programmer1, programmer2, programmer3, fudbaler1, fudbaler2)
    console.log(newArr);

    newArr.forEach(element => {
        console.log(element.print())
    })
    

