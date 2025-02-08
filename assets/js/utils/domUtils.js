// domUtils.js

export function existsById(id) {
    return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
}