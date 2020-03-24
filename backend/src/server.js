import 'dotenv/config';
import app from './app';

const { HOST, PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
  console.log(`To stop it press: CTRL + C`);
});
