function createPerson(firstName, lastName) {
    const output = {
      firstName,
      lastName,
    };
  
    Object.defineProperty(output, "fullName", {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(fullname) {
        let [firstName, lastName] = fullname.split(" ");
          this.firstName = firstName;
          this.lastName = lastName;
      },
    });
  
    return output;
  }

// let person = createPerson("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); 