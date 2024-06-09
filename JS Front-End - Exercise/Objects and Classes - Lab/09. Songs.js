function solve(args) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
        let songs = [];
        let numberOfSongs = args.shift();
        let songType = args.pop();
    
        for (let i = 0; i < numberOfSongs; i++) {
            let [songType, songName, songLength] = args[i].split("_")
            let song = new Song(songType, songName, songLength)
            songs.push(song);
        }
    
        if (songType == "all") {
            songs.forEach((i) => console.log(i.name))
        } else {
            let filteredSongs = songs.filter((i) => i.type === songType);
            filteredSongs.forEach((i) => console.log(i.name));
        }        
}
