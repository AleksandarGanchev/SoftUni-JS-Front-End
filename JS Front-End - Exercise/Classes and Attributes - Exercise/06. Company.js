class Company { 
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let data = [name, salary, position, department];
        if (data.some(element => element == '' || element == undefined || element == null)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error('Invalid input!')
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push([name, salary, position])
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    
    bestDepartment() {
        let bestAverageSalary = 0;
        let bestDep = {};       
        for (let [key, values] of Object.entries(this.departments)) {
            let currAverageSalary = 0;
            for (let value of values) {

                currAverageSalary += value[1];
            }
            currAverageSalary /= values.length;

            if (currAverageSalary > bestAverageSalary) {
                bestAverageSalary = Number(currAverageSalary).toFixed(2);
                bestDep = {};
                bestDep[key] = bestAverageSalary
            }
        }   
        
        let sortedEmployees = []
        for (let [key, values] of Object.entries(this.departments)) {
            if (bestDep.hasOwnProperty(key)) {
                for (let value of values) {
                    sortedEmployees.push(value)
                }
            }
        }

        sortedEmployees.sort((a, b) =>  {
            if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            }
            return b[1] - a[1];
        })

       let output = [];
        for (let [key, value] of Object.entries(bestDep)) {
            output.push(`Best Department is: ${key}`);
            output.push(`Average salary: ${value}`);
        }

        for (let data of sortedEmployees) {
            output.push(data.join(" "));
        }
        return output.join("\n")
    }
}