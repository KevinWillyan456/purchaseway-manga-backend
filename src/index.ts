import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () =>
    console.log(`Servidor rodando na porta: ${port} - http://localhost:${port}`)
);
