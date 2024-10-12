function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function calculateAverageSalary(salariesArr) {
      let averageSalary = 0;
      for (let salary of salariesArr) {
         averageSalary += salary
      }
      return averageSalary / salariesArr.length
   }

   function findHighestSalary(salariesArr) {
      let highestSalary = 0;
      for(let salary of salariesArr) {
         if (salary > highestSalary) {
            highestSalary = salary;
         }
      }
      return highestSalary
   }
   
   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value)
      let bestRestaurant = '';
      let bestAverageSalary = 0;
      let bestSalary = 0;
      let obj = {};
     
      for (el of input) {
         let [restrauntName, args] = el.split(" - ")
         employeeInfo = args.split(", ")
         
         for (let info of employeeInfo) {
            let [name, salary]  = info.split(" ")
            if (!(restrauntName in obj)) {
               obj[restrauntName] = {};
            }
            obj[restrauntName][name] = Number(salary); 
         }
      }
   
      for (let [restrauntName, employeeInfo] of Object.entries(obj)) {
         let currAverageSalary = calculateAverageSalary(Object.values(employeeInfo));
         if (currAverageSalary > bestAverageSalary) {
            bestAverageSalary = currAverageSalary;
            bestRestaurant = restrauntName;
            bestSalary = findHighestSalary(Object.values(employeeInfo))
         }
      }
   
   let result = Object.entries(obj[bestRestaurant]).sort((a, b) => b[1] - a[1]);
   let output = [];
   
   result.forEach(element => output.push(`Name: ${element[0]} With Salary: ${element[1]}`))

   let bestRest = document.querySelector('#bestRestaurant p');
   let bestRestWorkers = document.querySelector('#workers p');
   
   bestRest.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
   bestRestWorkers.textContent = output.join(" ");
   }
}