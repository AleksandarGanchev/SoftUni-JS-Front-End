function solve(arr) {
    let firstDayBoughtBitcoin = 0;
    let counter = 0;
    let totalLev = 0;
    let boughtBitcoins = 0;

    let bitcoinToLev = 11949.16;
    let goldToLev = 67.51;

    for (let i = 0; i < arr.length; i++) {
        let earnedLevPerDay = arr[i] * goldToLev

        counter += 1;
        if (counter % 3 == 0) {
            earnedLevPerDay *= 0.7
        }

        totalLev += earnedLevPerDay;
        
        while (totalLev >= bitcoinToLev) {
            boughtBitcoins += 1
            if (firstDayBoughtBitcoin == 0) {
                firstDayBoughtBitcoin = i + 1;
            }
            
            totalLev -= bitcoinToLev;
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (firstDayBoughtBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBoughtBitcoin}`);
    }
    console.log(`Left money: ${totalLev.toFixed(2)} lv.`)  
}
