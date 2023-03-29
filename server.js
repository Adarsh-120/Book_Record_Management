const http = require("http");

const port = 8084;                                      //local port
// http://localhost:8081

const toDoList = ["learn","apply things","succeed"];

http
  .createServer((req, res) =>{
    const {method, url} = req;
    console.log(method, url);
    

    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(toDoList.toString());
        }
    }
    res.end();
  })

       //http
       // .createServer((req, res) => {                         //call back function
       //     res.writeHead(200, { "Content-Type": text/html});
       //     res.write("<h2>Hey Server Started :-) </h2>");
       //     res.end();
       // })
.listen(port, () => {
    console.log(`Nodejs Server Started running on Port ${port}`);
});
//Its not working