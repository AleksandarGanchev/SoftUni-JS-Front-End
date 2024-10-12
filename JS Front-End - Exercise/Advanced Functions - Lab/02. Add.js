function solution(number) {
    function add (num1, num2) {
        return num1 + num2;
    }
    return add.bind(this, number);
}