(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    
    Array.prototype.skip = function (n) {
        return this.slice(n, this.length);
    }
    
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }
    
    Array.prototype.sum = function() {
        let output = 0;
        for (let i = 0; i < this.length; i++) {
            output += this[i];
        }
        return output;
    }
    
    Array.prototype.average = function () {
        let output = 0;
        for (let i = 0; i < this.length; i++) {
            output += this[i];
        }
        return output / this.length;
    }
})();