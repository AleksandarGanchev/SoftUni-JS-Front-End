function solve(catsInfo) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;    
        }

        meow () {
            return `${this.name}, age ${this.age} says Meow`
        }   
    }

    for (let catInfo of catsInfo) {
        let [name, age] = catInfo.split(" ")
        cats.push(new Cat(name, age))
    }

    for (let cat of cats) {
        console.log(cat.meow())
    }
}

