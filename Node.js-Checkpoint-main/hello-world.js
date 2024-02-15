const http = require("http");
const fs = require("fs");
const { passwordGenerator } = require("./passwordGenerator");
const { sendEmail } = require("./email-sender");
console.log("HELLO WORLD");
passwordGenerator();
sendEmail();

http
  .createServer((request, response) => {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<h1>Hello World</h1>");
    // Send the response body as "Hello World"
    response.end();
  })
  .listen(5000);

// Console will print the message
console.log("Server is running on http://127.0.0.1:5000/");

fs.writeFileSync("hello.txt", "Hello Node");
//read from hello.txt
fs.readFile("hello.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
