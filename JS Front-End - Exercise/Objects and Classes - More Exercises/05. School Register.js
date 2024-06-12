function solve(array) {
    function sum (arr) {
        let gradesSum = 0;
        for (let grade of arr) {
            gradesSum += grade;
        }
        return gradesSum / arr.length;
    }
    let obj = {};

    for (let previousYear of array) {
        [studentName, studentInfo, gradeInfo, averageGrade] = previousYear.split(": ");
        let [student, dontNeed] = studentInfo.split(", ")
        let [grade, averageScore] = gradeInfo.split(", ")
        grade ++;
        if (!(grade in obj) && averageGrade >= 3) {
            obj[grade] = {
                "students": [],
                "allGrades": []
            }
        }

        if (averageGrade >= 3) {
            obj[grade]["allGrades"].push(Number(averageGrade));
            obj[grade]["students"].push(student);
        }
    }

    for ([grade, info] of Object.entries(obj).sort((a, b) => a[0] - b[0])) {
        console.log(`${grade} Grade`)
        console.log(`List of students: ${info["students"].join(", ")}`)
        console.log(`Average annual score from last year: ${sum(info["allGrades"]).toFixed(2)}\n`)
    } 
}
