class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static distance(point1, point2) {
        let horizontalPoint = point1.x - point2.x;
        let verticalPoint = point1.y - point2.y;

        return Math.sqrt(horizontalPoint ** 2 + verticalPoint  ** 2);
    }
}

// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));