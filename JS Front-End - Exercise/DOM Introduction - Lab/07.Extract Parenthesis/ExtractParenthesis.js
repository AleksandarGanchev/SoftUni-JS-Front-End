function extract(content) {
    let elements = document.getElementById('content')
    let string = elements.textContent
    
    const pattern = /(?<=\()[\sA-Za-z0-9]+(?=\))/g;
    const text = string.match(pattern);
    
    return text.join("; ")
}
