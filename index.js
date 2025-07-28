import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDb } from './config/db.js'
import todoRoutes from './routes/todoRoutes.js';

const app = express()
app.use(express.json())
// const port = 3000
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDb();
app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})
