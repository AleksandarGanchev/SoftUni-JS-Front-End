function convertToJSON (firstName, lastName, hairColor) {
    let personInfo = {
        "name": firstName,
        "lastName": lastName,
        "hairColor": hairColor
    }

    return JSON.stringify(personInfo);
}
