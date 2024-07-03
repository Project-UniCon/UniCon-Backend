import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.router.js";

const app = express();

app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);

export { app };
