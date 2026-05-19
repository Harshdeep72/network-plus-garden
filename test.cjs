const fs = require('fs');
const code = fs.readFileSync('/run/media/harshdeep/ExternalSSD/Documents/Networking/frontend-dashboard/temp_artifacts/github-pages/assets/index-CbeZ9XzQ.js', 'utf8');
const index = code.indexOf('slug:`02-network-fundamentals--001-network-fundamentals`');
const endOfObject = code.indexOf('slug:`02-network-fundamentals--002-network-components`', index);
console.log(code.substring(endOfObject - 200, endOfObject + 50));
