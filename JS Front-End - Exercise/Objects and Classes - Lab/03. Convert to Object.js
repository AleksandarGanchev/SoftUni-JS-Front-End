function convertToObject(info) {
    let cityInfo = JSON.parse(info)

    for (let key in cityInfo) {
        console.log(`${key}: ${cityInfo[key]}`)
    }
}
