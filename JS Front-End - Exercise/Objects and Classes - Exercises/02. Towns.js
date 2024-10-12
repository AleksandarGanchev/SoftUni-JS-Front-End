function solve(arr) {
    for (items of arr) {
         [town, oldLatitude, oldLongitude] = items.split(" | ");
        
        let latitude = Number(oldLatitude).toFixed(2);
        let longitude = Number(oldLongitude).toFixed(2);

        let obj = {
            town,
            latitude,
            longitude,
            }
    
    console.log(obj);        
    }
}
