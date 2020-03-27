import 'dotenv/config';
import app from './app';
import { errors } from 'celebrate'

const { HOST, PORT } = process.env;

app.use(errors())

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
  console.log(`To stop it press: CTRL + C`);
});
