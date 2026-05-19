const fs = require('fs');
const code = fs.readFileSync('/run/media/harshdeep/ExternalSSD/Documents/Networking/frontend-dashboard/temp_artifacts/github-pages/assets/index-CbeZ9XzQ.js', 'utf8');
const regex = /slug:`02-network-fundamentals--001-network-fundamentals`(.*?)youtubeId:([^,}]*)/g;
let m;
while((m = regex.exec(code)) !== null) {
  console.log('youtubeId for 001 Network Fundamentals:', m[2]);
}
