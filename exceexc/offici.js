let buf = '';
let outer = '<img';
let inner = '';
let tag = 'img';

buf += outer + (inner ? `>${inner}</${tag}>` : '/>');

console.log(buf); // Outputs: <img/>
