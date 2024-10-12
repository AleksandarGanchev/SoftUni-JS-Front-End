function solve(arr) {
    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;
    let xRayCount = 0;

    function cut(string) {
        if ( string / 4 < desiredThickness) {
            return string;
        }
        
        while (string / 4 >= desiredThickness) {
            string /= 4;
            cutCount ++;
        }
        console.log(`Cut x${cutCount}`);
        console.log("Transporting and washing")
        return Math.floor(string);
    }
   
    function lap(string) {
        if (string * 0.8 < desiredThickness) {
            return string;
        }

        while (string * 0.8 >= desiredThickness) {
            string *= 0.8;
            lapCount ++;
        }
        console.log(`Lap x${lapCount}`);
        console.log("Transporting and washing")

        return Math.floor(string);
    }

    function grind(string) {
        if (string - 20 < desiredThickness) {
            return string;
        }

        while (string - 20 >= desiredThickness) {
            string -= 20;
            grindCount ++;
        }
        console.log(`Grind x${grindCount}`);
        console.log("Transporting and washing")

        return Math.floor(string);
    }

    function etch(string) {
        if (string - 1 < desiredThickness) {
            return string
        }

        while (string - 1 >= desiredThickness) {
            string -= 2;
            etchCount ++;  
        }
        console.log(`Etch x${etchCount}`);
        console.log("Transporting and washing")
        return Math.floor(string);
    }

    function xRay(string) {
        if (string + 1 === desiredThickness) {
            string ++;
            xRayCount ++;
            console.log(`X-ray x${xRayCount}`);
            return string;    
        }
        return string;
    }

    desiredThickness = arr[0];
    for (let i = 1; i < arr.length; i++) {
        chunkMicrons = arr[i];
        console.log(`Processing chunk ${chunkMicrons} microns`)

        chunkMicrons = xRay(chunkMicrons);
        chunkMicrons = cut(chunkMicrons);
        chunkMicrons = lap(chunkMicrons);
        chunkMicrons = grind(chunkMicrons);
        chunkMicrons = etch(chunkMicrons);
        
        
        console.log(`Finished crystal ${chunkMicrons} microns`)
        cutCount = 0;
        lapCount = 0;
        grindCount = 0;
        etchCount = 0;
        xRayCount = 0;
    }
}
