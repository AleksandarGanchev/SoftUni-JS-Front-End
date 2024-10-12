function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
    
        }
        get area() {
        }

        convertRectangleToCm(value) {
            switch(value) {
                case 'cm':
                    break;
                case 'mm':
                    this.width *= 10;
                    this.height *= 10;
                    break;
                case 'm':
                    this.width /= 100;
                    this.height /= 100;
                    break;
            }
        }
        
        convertCircleToCm(value) {
            switch(value) {
                case 'cm':
                    break;
                case 'mm':
                    this.radius *= 10;
                    break;
                case 'm':
                    this.radius /= 100;
                    break;
            }
        }
        
        changeUnits(value) {
            if (this.units == 'cm') {
                if (value == 'mm') {
                    this.radius *= 10;
                    this.width *= 10;
                    this.height *= 10;
                }else if(value == 'm') {
                    this.radius /= 100;
                    this.width /= 100;
                    this.height /= 100;
                }

            } else if (this.units == 'mm') {
                if (value == 'cm') {
                    this.width /= 10;
                    this.height /= 10;
                    this.radius /= 10;
                } else if (value == 'm') {
                    this.width /= 1000;
                    this.height /= 1000;
                    this.radius /= 1000;
                }

            }else if (this.units == 'm') {
                if (value == 'cm') {
                    this.width *= 100;
                    this.height *= 100;
                    this.radius *= 100;
                } else if (value == 'mm') {
                    this.width *= 1000;
                    this.height *= 1000;
                    this.radius *= 1000;
                }
            }

            return this.units = value;
        }            

        toString() {
        }
        
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units)
            this.radius = radius;
            this.convertCircleToCm(units);

        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2); 
        }
        
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor (width, height, units) {
            super(units)
            this.width = width;
            this.height = height;
            this.convertRectangleToCm(units);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return  `Figures units: ${this.units} Area: ${this.width * this.height} - width: ${this.width}, height: ${this.height}`
        }
    }
    
    return {
         Figure,
         Circle,
         Rectangle,
    }
}

// const classes = solve();

// const Figure = classes.Figure;
// const Circle = classes.Circle;
// const Rectangle = classes.Rectangle;

// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200 
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

// r.changeUnits('cm');
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

// c.changeUnits('mm');
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50






