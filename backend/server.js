import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
// parses incoming JSON requests and puts the parsed data in req. body
app.use(express.json());

dotenv.config();

app.get('/api', (req, res) => {
  res.send('backend APIs working!!');
});

mongoose
  .connect(
    'mongodb+srv://hechmi:zatla@cluster0.lzk5oou.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB_CONNECTED SUCCESSFULLY!!');
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Hosting on http://localhost:${port}`);
});
