function newInterval(floori, offseti, count, field) {
    return {
        floor: function(date) {
            return floori.call(this, date);
        },
        offset: function(date, step) {
            return offseti.call(this, date, step);
        },
        range: function(start, stop, step = 1) {
            let range = [];
            let current = new Date(+start); // Cloning start date
            step = Math.max(1, step); // Ensure step is at least 1

            if (!(start < stop)) return range; // Return empty array if start is not less than stop

            while (current < stop) {
                range.push(new Date(+current)); // Push clone of current date
                offseti.call(this, current, step); // Move to next interval
            }

            return range;
        },
        count: function(start, end) {
            return count(new Date(+start), new Date(+end));
        },
        field: field
    };
}

// Example usage:

// Custom floor function to floor to the start of the day
function floorToDay(date) {
    date.setHours(0, 0, 0, 0);
    return date;
}

// Custom offset function to add days
function offsetDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}

// Custom count function to count number of days between two dates
function countDays(start, end) {
    let count = 0;
    let current = new Date(+start);

    while (current < end) {
        offsetDays(current, 1);
        count++;
    }
    return count;
}

let dayInterval = newInterval(floorToDay, offsetDays, countDays, 'date');

let start = new Date('2023-01-01');
let end = new Date('2023-01-10');

console.log(dayInterval.range(start, end)); // outputs array of dates from Jan 1, 2023 to Jan 9, 2023
console.log(dayInterval.count(start, end)); // outputs 9
