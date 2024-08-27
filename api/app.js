import express from "express";
import bodyParser from 'body-parser';

import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';

const PORT = 8800;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
    console.log("Server is running!");
});