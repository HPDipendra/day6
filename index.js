import express from "express";
import userRouter from "./route/userRouter.js";
import connection from "./model/conn.js";
import "dotenv/config"


const app = express();
app.use(express.json());

//routes
app.use('/work', userRouter);

//server
app.listen(5000, async () => {
    console.log('the server is running in port 5000');
    connection.sync();

    try {
        await connection.authenticate();
        console.log('connection  established succesfully');
    }
    catch (error) {
        console.error('connection not posssible', error)
    }
})