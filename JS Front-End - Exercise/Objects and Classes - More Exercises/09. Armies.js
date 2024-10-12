function armyTask(arr) {
    let armies = {};

    for (let element of arr) {
        if (element.includes("arrives")) {
            let [leader, arrives] = element.split("arrives");
            leader = leader.trim();

            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {};
            }

        } else if (element.includes(":")) {
            let [leader, info] = element.split(": ");
            let [armyName, armyCount] = info.split(", ");
            if (armies.hasOwnProperty(leader)) {
                armies[leader][armyName] = Number(armyCount);
            }

        } else if (element.includes("+")) {
            let [armyName, armyCount] = element.split(" + ");
            armyCount = Number(armyCount);

            for (let leader in armies) {
                if (armies[leader].hasOwnProperty(armyName)) {
                    armies[leader][armyName] += armyCount;
                }
            }

        } else if (element.includes("defeated")) {
            let [leader, defeated] = element.split("defeated");
            leader = leader.trim();
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        }
    }

    let leadersTotalCount = {};

    for (let leader in armies) {
        leadersTotalCount[leader] = Object.values(armies[leader]).reduce((acc, count) => acc + count, 0);
    }

    let sortedLeaders = Object.keys(leadersTotalCount).sort((a, b) => leadersTotalCount[b] - leadersTotalCount[a]);

    for (let leader of sortedLeaders) {
        console.log(`${leader}: ${leadersTotalCount[leader]}`);
        let sortedArmies = Object.entries(armies[leader]).sort((a, b) => b[1] - a[1]);
        for (let [armyName, armyCount] of sortedArmies) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }
}
