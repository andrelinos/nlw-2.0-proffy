import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)
app.use(cors());

app.listen(3333, () => {
  console.log('🚀 Backend started! 🦖 on port 3333');
});