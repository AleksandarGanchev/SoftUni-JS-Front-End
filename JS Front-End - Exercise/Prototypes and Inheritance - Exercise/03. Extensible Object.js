function createExtensibleObject() {
    let obj = {
        extend(template) {
            for (let property in template) {
                if (typeof template[property] === 'function') {
                    Object.getPrototypeOf(this)[property] = template[property];
                } else {
                    this[property] = template[property];
                }
            }
        }
    };

    return obj;
}