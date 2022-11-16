import express from 'express'
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js';


import cors from 'cors'

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir:'./upload'
}))

//Routes
app.use(postsRoutes);

export default app