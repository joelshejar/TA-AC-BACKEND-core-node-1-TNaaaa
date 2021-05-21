var url = require("url");
const parsedUrl = url.parse(
    `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);
console.log(parsedUrl);

console.log(parsedUrl.pathname);
console.log(parsedUrl.query);

console.log(parsedUrl.host);
console.log(parsedUrl.protocol);