import express from 'express';
import bodyParser from 'body-parser';
import users from './endpoints/users/users';

const app = express()
const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', users);

app.listen(port, () => console.log('is running'))

export default app;
