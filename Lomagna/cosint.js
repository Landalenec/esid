const HREF = 'href';
const SRC = 'src';
const ALT = 'alt';

function handleAttribute(attribute) {
    switch (attribute) {
        case HREF:
            console.log('Handling HREF attribute');
            // Add specific code to handle HREF
            break;
        case SRC:
            console.log('Handling SRC attribute');
            // Add specific code to handle SRC
            break;
        case ALT:
            console.log('Handling ALT attribute');
            // Add specific code to handle ALT
            break;
        default:
            console.log('Unknown attribute');
            // Handle unknown attribute case
            break;
    }
}

// Usage
handleAttribute(HREF);  // Output: Handling HREF attribute
