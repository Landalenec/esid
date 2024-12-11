function parseScaleRange(range) {
    var parts = range.split('-');
    if (parts.length !== 2) {
        throw new Error('Invalid range format');
    }
    var start = parseFloat(parts[0].trim());
    var end = parseFloat(parts[1].trim());
    if (isNaN(start) || isNaN(end)) {
        throw new Error('Invalid range value');
    }
    return { start: start, end: end };
}
