import express from "express";
import httpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import studentRouter from "./routes/student.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/Student", studentRouter);

app.get("/", (req, res) => {
 res.json("Hello From Baccha's server");
});

app.use((req, res, next) => {
  return next(new httpError("Request not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  return res
    .status(error.statusCode || error.status || 500)
    .json({ message: error.message || "Internal server error" });
});

const port = 5000;


async function startServer() {
  try {
    const correct = await connectDB();

    if (!correct) {
      throw new Error("failed to connect db");
    }

    app.listen(port, (error) => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    return console.log(error.message);
  }
}
startServer();