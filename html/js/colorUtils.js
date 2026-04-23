function isValidColorName(name) {
    if (typeof name !== 'string') return false;
    return name.trim().length > 0;
}

function formatColorName(name) {
    return name.trim();
}

// Allow importing in Node.js for Jest tests
if (typeof module !== 'undefined') {
    module.exports = { isValidColorName, formatColorName };
}
