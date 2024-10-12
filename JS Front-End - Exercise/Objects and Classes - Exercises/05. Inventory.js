function solve(arr) {
    let heroInfo = [];
    
    for (let info of arr) {
        let [hero, level, items] = info.split(" / ")
        let currentHero = {
            hero,
            level,
            items
        }
        heroInfo.push(currentHero);
    }

heroInfo.sort((a,b) => a.level - b.level);

    for (let info of heroInfo) {
        console.log(`Hero: ${info.hero}`)
        console.log(`level => ${info.level}`)
        if (info.items) {
            console.log(`items => ${info.items}`)
        }
    }
}
