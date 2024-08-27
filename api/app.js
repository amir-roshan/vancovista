import express from "express";

const PORT = 8800;

const app = express();

app.use("/api/test", (req, res) => {
    res.send("It works!!");
});

app.listen(PORT, () => {
    console.log("Server is running!");
});