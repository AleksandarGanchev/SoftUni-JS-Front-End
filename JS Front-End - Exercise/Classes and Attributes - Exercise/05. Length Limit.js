class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    };

    increase(length) {
        this.innerLength  += Number(length);
    }

    decrease(length) {
        this.innerLength -= Number(length);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if(this.innerLength == 0 ) {
            return "...";
        }
        
        if(this.innerString.length > this.innerLength) {
            return this.innerString.split("")
            .splice(0, this.innerLength)
            .join("")
            +'...';
        }

        else {
            return this.innerString;
        }
    }
}



let test = new Stringer("Test", 5);
console.log(test.toString()); 

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());



