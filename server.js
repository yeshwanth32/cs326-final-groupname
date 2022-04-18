import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
