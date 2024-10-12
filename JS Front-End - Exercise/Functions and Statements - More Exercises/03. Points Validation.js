function solve(points) {
    const [x1, y1, x2, y2] = points;

    function isDistanceValid(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distance);
    }

    function output(x1, y1, x2, y2) {
        if (isDistanceValid(x1, y1, x2, y2)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    output(x1, y1, 0, 0);

    output(x2, y2, 0, 0);

    output(x1, y1, x2, y2);
}

