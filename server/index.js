import { connectDB } from './database.js';
import {PORT} from './config.js'
import app from './app.js'

import cors from 'cors'

app.use(cors());


connectDB();
app.listen(PORT);
console.log('Server is running on Port: ',PORT);