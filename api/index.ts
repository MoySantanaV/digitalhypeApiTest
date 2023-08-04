import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import decoderRoutes from '../src/Routes/decoderRoutes';

dotenv.config();

mongoose.connect(process.env.MONGO_URL!);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB!');
});

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*'
}))

app.get("/api", (req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("server working");
  });

app.listen(3001, () => console.log('Server running on port 3001'));

app.use('/api', decoderRoutes);

