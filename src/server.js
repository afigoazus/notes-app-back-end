import express from 'express';
import router from './routes.js';
import cors from 'cors';

const app = express();
const port = 3000;
const host = 'localhost';

app.use(
  cors({
    origin: '*',
  }),
);

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
