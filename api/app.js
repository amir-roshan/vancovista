import express from "express";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";

import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';

import { config } from 'dotenv';
config({ path: '.env' });

const PORT = 8800;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
    console.log("Server is running!");
});