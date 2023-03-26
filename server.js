const http = require("http");

const port = 8081;
// http://localhost:8081

http
.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": text/html});
    res.write("<h2>Hey Server Started :-) </h2>");
    res.end();
})
.listen(port, () => {
    console.log(`Nodejs Server Started running on Port ${port}`);
});