import express from "express";
import httpStatus from "http-status";
import cors from 'cors'
import routes from './routes/index.js'
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())
app.use(routes)
app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})