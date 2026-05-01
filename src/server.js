import server from './server/index.js';
import 'dotenv/config';

const port = process.env.port || 3000;
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

server.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
