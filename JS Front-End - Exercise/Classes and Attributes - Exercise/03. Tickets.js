function solve(array, criterion) {
    let output = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (let data of array) {
        let [destination, price, status] = data.split('|');
        output.push(new Ticket(destination, price, status));
    }

    return output.sort((a, b) => {
        if (criterion === 'price') {
            return a.price - b.price;
        } else {
            return a[criterion].localeCompare(b[criterion]);
        }
    });
}

// console.log(solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'))

// console.log(solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status'))