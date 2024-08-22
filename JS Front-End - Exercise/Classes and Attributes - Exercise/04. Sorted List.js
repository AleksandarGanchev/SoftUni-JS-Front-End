class List {
    constructor () {
        this.numbers = [];
        this.size = 0;
        }

    add(number) {
        this.numbers.push(number);
        this.size ++;
        this.numbers.sort((a, b) => a - b)
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of range');
        }

        this.numbers.splice(index, 1);
        this.size --;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of range');
        }
        
        return this.numbers[index];
    }
}
