class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  sound() {
    console.log(`${this.name} says "Meowww"`)
  }

  walk() {
    console.log(`${this.name} is walking...`)
  }

  drink() {
    console.log("slurp slurp")
  }
}

const cat1 = new Cat("Fluffy", "Orange", 12)
const cat2 = new Cat("Smokey", "Grey", 3)

console.log(cat1)
console.log(cat2)

cat1.sound()
cat1.walk()
cat1.drink()

cat2.sound()
cat2.walk()
cat2.drink()



class Pirate {
  constructor(name, age = 32, skill = 'stealing'){
    this.name = name;
    this.age = age;
    this.skill = skill;
  }

  sound() {
    console.log("ARRRGH Matey!!")
  }

  fight() {
    console.log(`${this.name} is fighting...`)
  }

  sail() {
    console.log(`${this.name} is sailing...`)
  }
}

jollyRoger = []
blackPearl = []

for(i=0; i<=2; i++) {
  jollyRoger.push(new Pirate('Pirate' + (i+1)))
  blackPearl.push(new Pirate('Pirate' + (i+1)))
}

for (pirate of jollyRoger) {
  console.log(pirate.name)
  console.log(pirate.age)
  console.log(pirate.skill)
}

for (pirate of blackPearl) {
  console.log(pirate.name)
  console.log(pirate.age)
  console.log(pirate.skill)
}