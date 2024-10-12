function solve(input) {
    let obj = {};
    
    let n = input.shift();
    for (let i = 0; i < n; i++) {
        let charInfo = input.shift();
        let [heroName, hp, bullets] = charInfo.split(' ');
        hp = Number(hp);
        bullets = Number(bullets);
        obj[heroName] = [hp, bullets];
    }

    for (let charData of input) {
        if (charData == 'Ride Off Into Sunset') {
            break;
        }

        let [action, ...args] = charData.split(" - ");
        if (action == 'FireShot') {
            let [charName, target] = args;
            if (obj[charName][1] > 0) {
                obj[charName][1] -= 1;
                console.log(`${charName} has successfully hit ${target} and now has ${obj[charName][1]} bullets!`);
            }else {
                console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`);
            }

        } else if (action == 'TakeHit') {
            let [charName, damage, attacker] = args;
            damage = Number(damage);
            if (obj[charName][0] - damage > 0) {
                obj[charName][0] -= damage;
                console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${obj[charName][0]} HP!`);
            } else {
                console.log(`${charName} was gunned down by ${attacker}!`);
                delete obj[charName];
            }

        } else if (action == 'Reload') {
            charName = args;
            if (obj[charName][1] < 6) {
                console.log(`${charName} reloaded ${6 - obj[charName][1]} bullets!`);
                obj[charName][1] = 6;
            } else {
                console.log(`${charName}'s pistol is fully loaded!`);
            }

        } else if (action == 'PatchUp') {
            let [charName, amount] = args;
            amount = Number(amount);

            if (obj[charName][0] < 100) {
                if (obj[charName][0] + amount <= 100) {
                    obj[charName][0] += amount;
                    console.log(`${charName} patched up and recovered ${amount} HP!`);
                } else {
                    obj[charName][0] = 100;
                    let calculateAmount = 100 - obj[charName][0];
                    console.log(`${charName} patched up and recovered ${calculateAmount} HP!`);
                }
            } else {
                console.log(`${charName} is in full health!`);
            }
        } 
    }

    for (let [charName, charInfo] of Object.entries(obj)) {
        let hp = charInfo[0];
        let bullets = charInfo[1];
        console.log(`${charName}`);
        console.log(`  HP: ${hp}`);
        console.log(`  Bullets: ${bullets}`);
    }
}         
