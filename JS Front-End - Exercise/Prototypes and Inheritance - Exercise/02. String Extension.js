(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
          }

        if (n < 4) {
            return ".".repeat(n);
          }
          
        let lastSpace = this.slice(0, n - 2).lastIndexOf(" ");
        if (lastSpace === -1) {
            return this.toString().substring(0, n - 3) + "...";
        }
        return this.toString().substring(0, lastSpace) + "...";
    };
      
    String.format = function (string, ...params) {
        for (let i= 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i])
            
        }
        return string;    
    };
})()



// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);

// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');