function attachEvents() {
    const submitButton = document.querySelector('#submit');
    const studentsElement = document.createElement('ul');
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('input');
    const tableElement = document.querySelector('#results');
    const tBodyElement = document.querySelector('tbody');
    
    fetch(url)
        .then(res => res.json())
        .then(data => {

            Object.values(data).forEach(student => {
                let tdFirstName = document.createElement('td');
                let tdLastname = document.createElement('td');
                let tdFacultyNumber = document.createElement('td');
                let tdGrade = document.createElement('td');

                tdFirstName.textContent = student.firstName
                tdLastname.textContent = student.lastName
                tdFacultyNumber.textContent = student.facultyNumber
                tdGrade.textContent = student.grade;

                let trElement = document.createElement('tr');
               
                
                trElement.appendChild(tdFirstName);
                trElement.appendChild(tdLastname);
                trElement.appendChild(tdFacultyNumber);
                trElement.appendChild(tdGrade);

                tBodyElement.appendChild(trElement);
            });
        })
        

    submitButton.addEventListener('click', () => {
    if ([firstName.value,lastName.value, facultyNumber.value, grade.value].some(x => x == '')) {
        return;
    }
    let allNumbers = facultyNumber.value.split("").every(char => !isNaN(char));   
    if(allNumbers == false) {        
        return;
    }
    let students = {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value,
        grade: grade.value,
    }

    fetch(url, {
        method : 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(students)
    })

    firstName.value = ''
    lastName.value = ''
    facultyNumber.value = ''
    grade.value = ''
  })


}

attachEvents();