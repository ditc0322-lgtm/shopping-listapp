const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8765;
const DIR = __dirname;

http.createServer((req, res) => {
  const filePath = path.join(DIR, "index.html");
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
