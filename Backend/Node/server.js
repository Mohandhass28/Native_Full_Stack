const express = require("express");
const core = require("cors");
const app = express();

app.use(express.json());
app.use(core({ origin: true, credentials: true }));

const dataRouter = require("./Routes/data");

app.use("/data", dataRouter);

app.listen(5000, () => {
  console.log("Api running");
});
