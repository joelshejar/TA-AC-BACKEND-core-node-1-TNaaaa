var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);

console.log(parsedUrl.pathname);
console.log(parsedUrl.query);

console.log(parsedUrl.host);
console.log(parsedUrl.protocol);






