import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {    
    res.json({'Hello World!': 'Test'});
});

app.listen(port, () => console.log('is running'))
