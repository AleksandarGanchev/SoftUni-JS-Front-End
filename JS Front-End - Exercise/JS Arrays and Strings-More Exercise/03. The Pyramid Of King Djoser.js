function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;
    
    while (base > 2) {
        steps++;
        let outerLayer = (base * 4) - 4;
        stone += Math.pow(base - 2, 2) * increment; 
        
        if (steps % 5 === 0) {
            lapis += outerLayer * increment;
        } else {
            marble += outerLayer * increment;
        }
        
        base -= 2;
    }
    
    steps++;
    gold = Math.pow(base, 2) * increment; 
    
    let height = Math.floor(steps * increment);
    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}
