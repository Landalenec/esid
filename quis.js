// Example values for demonstration
let board = new Array(100).fill(0); // Simplified board
let sprite = [0b11110000, 0b00001111]; // Simplified sprite data
let x = 10; // Base position on the board
let w = 2; // Width of the sprite
let msx = 4; // Left shift amount
let sx = 4; // Right shift amount
let last = 0; // Initial last value

for (let j = 0; j < 1; j++) {
    for (let i = 0; i < w; i++) {
        board[x + i] |= last << msx | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
    }
}

console.log(board);
