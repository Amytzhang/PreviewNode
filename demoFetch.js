const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/getList") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Hello, World!" }));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  })
  .listen(5174, () => {
    console.log("Server running at http://localhost:/");
  });
