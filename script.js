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