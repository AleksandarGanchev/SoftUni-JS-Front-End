function solve (arr) {
    let obj = {};

    for (let items of arr) {
        if (items.includes("addMovie")) {
            let [operation, ...movie] = items.split(" ")
            let movieName = movie.join(" ");
            obj[movieName] = {};
            obj[movieName].name = movieName;

        } else if (items.includes("directedBy")) {
            let [movieName, director] = items.split(" directedBy ")
            if (movieName in obj) {
                obj[movieName].director = director;
            }

        } else if (items.includes("onDate")) {
            let [movieName, date] = items.split(" onDate ")
            if (movieName in obj) {
                obj[movieName].date = date;
            }            
        }    
    }
    
    for (let [movieName, info] of Object.entries(obj)) {
        if (Object.keys(obj[movieName]).length == 3) {
            console.log(JSON.stringify(info))
        }
    }
}    