export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isNullOrEmpty(string) {
    if (string === null || string.length > 0) {
        return true;
    }
}