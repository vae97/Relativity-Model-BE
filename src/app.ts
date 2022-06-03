import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import {PythonShell} from 'python-shell';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.route("/").get((req,res)=>{

    PythonShell.run('src/ChristoffelSymbols/christoffelSymbols.py',undefined,function (err,val) {
        if (err) {
          res.send(err)
          return
        };
        res.send(val)
      });

    
})

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
  console.log("Press Ctrl+C to quit");
})