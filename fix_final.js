const fs = require('fs');
const file = 'index.html';
let c = fs.readFileSync(file, 'utf8');

const graduationCap = '\uD83C\uDF93';
const titleRegex = new RegExp(graduationCap + '\\s*Aulas', 'g');

if (titleRegex.test(c)) {
    console.log('Found title regex match');
    c = c.replace(titleRegex, 'Aulas');
} else {
    console.log('No title regex match');
}

const uniqueStyle = 'background: #FAF5FF; width: 80px; height: 80px;';
const parts = c.split(uniqueStyle);
if (parts.length > 1) {
    const endDiv = parts[1].indexOf('</div>');
    const middle = parts[1].substring(0, endDiv);
    const tagClose = middle.indexOf('>');
    // Ensure we are inserting correct HTML
    const newMiddle = middle.substring(0, tagClose+1) + '\n                        ' + graduationCap;
    c = parts[0] + uniqueStyle + newMiddle + parts[1].substring(endDiv);
    console.log('Forced icon rewrite');
}

fs.writeFileSync(file, c, 'utf8');
