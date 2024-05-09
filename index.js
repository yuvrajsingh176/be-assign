import express from "express";
import morgan from "morgan";
import cors from 'cors'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";
import  { connectToDB } from "./db/db.js";
const app = express();
dotenv.config();
connectToDB().catch((e) => {
  console.log(e);
});
app.use(cors())
app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/", (req, res) => {
  res.json({ message: "data received", data: req.body });
});

app.use("/api", taskRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
