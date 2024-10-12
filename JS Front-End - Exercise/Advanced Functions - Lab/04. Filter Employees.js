function solve(data, criteria) {
    let employeesInfo = JSON.parse(data)
    
    if (criteria == 'all') {
        employeesInfo.forEach((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        });
    } else {
        let [criteriaType, criteriaValue] = criteria.split('-');

        employeesInfo
        .filter(employee => employee[criteriaType] == criteriaValue)
        .map((employee, index) => (`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`))
        .forEach(employee => console.log(employee))
    }
}



// function solve(data, criteria) {
//     let employeesInfo = JSON.parse(data)
    
//     if (criteria == 'all') {
//         employeesInfo.forEach((employee, index) => {
//             console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
//         });
//     } else {
//         let output = [];

//         let [criteriaType, criteriaValue] = criteria.split('-');
//         for (let employee of employeesInfo) {
//             for (let [key, value] of Object.entries(employee)) {
//                 if (criteriaValue == value) {
//                     output.push(`${employee.first_name} ${employee.last_name} - ${employee.email}`);
//                 }
//             }
//         }

//         output.forEach((employee, index) => {
//             console.log((`${index}. ${employee}`));
//         });    
//     }
// }
