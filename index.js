const fs = require("fs");
const http = require("http");

fs.writeFile(
  "index.html",
  `
<h1> Hello World </h1>
<p> This is {Your Name}... </p>
`,
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("index.html created successfully!");
  }
);

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.end(data);
  });
});

server.listen(5000);

