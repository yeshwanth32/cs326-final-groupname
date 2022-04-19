import express from 'express';
import logger from 'morgan';
import faker from '@faker-js/faker'

const app = express();
const port = 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('src'));
app.use(express.static('src/html'));

let rentals = {
	'God of War': [
		{'price': 10, 'condition': 'fair', 'seller': 'Iris'}
	]
}

async function addGame(res, game, price, condition) {
	if (!(game in rentals)) {
		rentals[game] = [];
	}
	rentals[game].push({'price': price, 'condition': condition, 'seller': faker.name.findName()})
	res.json({ 'price': price, 'condition': condition, 'seller': faker.name.findName() })
}

app.post('/addGame', async (req, res) => {
	const options = req.body;
	addGame(res, options.game, options.price, options.condition);
})

app.get('/games/:game', async (req, res) => {
	const options = req.params;
	if (options.game in rentals) {
		res.json(rentals[options.game]);
	} else {
		res.json([]);
	}
})

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
