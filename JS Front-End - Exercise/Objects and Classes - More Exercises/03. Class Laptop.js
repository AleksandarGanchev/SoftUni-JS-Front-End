class Laptop {
    constructor(info, quality) {
        this.info = info
        this.quality = quality
        this.isOn = false
    }

    turnOn() {
        this.quality -= 1
        this.isOn = true
    }

    turnOff() {
        this.quality -= 1
        this.isOn = false
    }

    showInfo() {
        return JSON.stringify(this.info)
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5)
    }
}