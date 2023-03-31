const express = require("express");

const app = express();
app.use(express.json());

const port = 8081;

const toDoList = ["learn", "apply things", "succeed"];

// http://localhost:8081

app.get("/todos", (req, res) => {
    res.status(202).send(toDoList);       //res.writeHead(200);   res.write(toDoList);
});


app.post("/todos", (req, res) => {
    let newToDoitem = req.body.name;
    toDoList.push(newToDoitem);
    res.status(202).send({message: "Task Added Successfully"});

});

app.delete("/todos", (req, res) => {
    const deleteThisItem = req.body.name;

    toDoList.find((elem, index) => {
        if (elem === deleteThisItem){
            toDoList.splice(index, 1);     
        }
        res.status(202).send({ message: `Deleted Item is: ${req.body.name}`});
    });
});

app.all("*", (req, res) => {
    res.status(202).send();
});

app.listen(port, () => {
    console.log(`Nodejs Server Started running on port: ${port}` );
});

