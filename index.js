import express from "express";
import model from "./model";

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.get("/api", (request, response) => {
    response.render("index", model)
});

app.listen(port, () => console.log(`Started on port ${port}`));
