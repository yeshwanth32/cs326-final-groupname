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

let communities = [];

async function addGame(res, game, price, condition) {
	if (!(game in rentals)) {
		rentals[game] = [];
	}
	rentals[game].push({'price': price, 'condition': condition, 'seller': faker.name.findName()})
	res.json({ 'price': price, 'condition': condition, 'seller': faker.name.findName() })
}

async function addCommunity(res, game) {
	if (game === undefined) {
		// 400 - Bad Request
		response.status(400).json({ error: 'Game is required' });
	} else {
		communities.push(game);
		res.json(game);
	}
}

async function deleteCommunity(res, game){
	if(game === undefined){
		// 400 - Bad Request
		response.status(400).json({ error: 'Game is required' });
	} else {
		let index = communities.indexOf(game);
		if(index !== -1){
			communities.splice(index, 1);
		}
		res.json(game);
	}
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

app.get('/communities', async (req, res) => {
	res.json(communities);
});

app.post('/communities/join', async (req, res) => {
	const options = req.body;
	addCommunity(res, options.game);
});

app.delete('/communities/delete', async (req, res) => {
	const options = req.body;
	deleteCommunity(res, options.game);
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
