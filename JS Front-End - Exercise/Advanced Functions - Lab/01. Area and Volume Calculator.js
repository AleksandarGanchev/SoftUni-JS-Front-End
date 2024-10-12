function area() {
        return Math.abs(this.x * this.y);
    };

function vol() {
        return Math.abs(this.x * this.y * this.z);
    };

function solve(area, vol, input) {
   let parsedData = JSON.parse(input);
   let output = [];
   for (let data of parsedData) {
        output.push({
            area: area.call(data),
            volume: vol.call(data),
        });
   }
   return output
}
    