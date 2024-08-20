function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.age = age;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let firstObj = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let secondObj = new Person('SoftUni');
    let thirdObj = new Person('Stephan', 'Johnson', 25);
    let fourthObj = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')

    return [firstObj, secondObj, thirdObj, fourthObj];
}
