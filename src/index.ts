import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "./database";
import { routes } from "./routes";
import cors from 'cors'

config();
connectToDatabase();

const app = express();
const port = 3000;

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () =>
    console.log(`Servidor rodando na porta: ${port} - http://localhost:${port}`)
);
