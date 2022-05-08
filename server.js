import express from 'express';
import logger from 'morgan';
import faker from '@faker-js/faker'
//import users from './users.js';
//import auth from './auth.js';
import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

import { GameRentalsDatabase, UserRentalsDatabase, CommunitiesDatabase } from './db.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('src'));
app.use(express.static('src/html'));

dotenv.config()
let client = await MongoClient.connect(process.env.DATABASE_URL);
let dbo = client.db("ugames");

const rentalsDB = new GameRentalsDatabase(process.env.DATABASE_URL);
await rentalsDB.connect()

const communitiesDB = new CommunitiesDatabase(process.env.DATABASE_URL);
await communitiesDB.connect()

let userRentals = ['g1', 'g3', 'g6'];
const userRentalsDB = new UserRentalsDatabase(process.env.DATABASE_URL)
await userRentalsDB.connect()

let communities = [];
let users = { 'test': 'test'};

async function addGame(res, game, price, condition) {
	if(game === undefined){
		// 400 - Bad Request
		res.status(400).json({ error: 'Game is required' });
	}

	if(price === undefined){
		// 400 - Bad Request
		res.status(400).json({ error: 'Price is required' });
	}

	if(condition === undefined){
		// 400 - Bad Request
		res.status(400).json({ error: 'Condition is required' });
	}

	let data = await rentalsDB.addRental(game, price, condition);
	res.json(data);
}

async function addCommunity(res, game, user) {
	if (game === undefined) {
		// 400 - Bad Request
		res.status(400).json({ error: 'Game is required' });
	} else {
		const existingComms = await communitiesDB.getUserCommunities(user);
		for (let comm of existingComms) {
			if (comm['game'] === game) {
				res.status(400).json({ error: 'Already in this community' });
				return;
			}
		}

		let data = await communitiesDB.addComm(game, user);
		res.json(data);
	}



	
}

async function deleteCommunity(res, game, user){
	if(game === undefined){
		// 400 - Bad Request
		response.status(400).json({ error: 'Game is required' });
	} else {
		let data = await communitiesDB.deleteComm(game, user);
		res.json(data);
	}
}

async function addUser(response, auth){
	let userExists = false
	dbo.collection("users").find({"name": auth.username}).toArray(function(err, result) {
		if (err) throw err;
		if (result.length == 0){
			let userObj = {};
			let userinfo = {};
			userObj["name"] = auth.username;
			userinfo["password"] = auth.password;
			userObj["info"] = userinfo;
			dbo.collection("users").insertOne(userObj, function(err, res) {
				if (err) throw err;
				console.log("1 user inserted");
				response.json(auth);
				return;
			});
		}
		else{
			response.status(400).json({ error: 'user exists' });
			return;
		}
	});	
}

app.post('/addGame', async (req, res) => {
	const options = req.body;
	addGame(res, options.game, options.price, options.condition);
})


app.get('/games/:game', async (req, res) => {
	const options = req.params;
	const rentals = await rentalsDB.getGameRentals(options.game);
	let result = [];
	for (let rental of rentals) {
		let price = rental['price'];
		let condition = rental['condition'];
		result.push({ 'price': price, 'condition': condition, 'seller': faker.name.findName() })
	}
	res.json(result);
})


app.get("/rentals/user/:userId", async(req, res) =>{
	const userId = req.params.userId;
	console.log(userId)
	const userRentals = await userRentalsDB.getUserRentals(userId);
	let result = [];
	for (let rental of userRentals) {
		result.push(rental['game']);
	}
	res.json(result);
	return;
});

app.post('/rent', async(req, res) => {
	const gameName = req.body.game;
	const userId = req.body.user;
	const existingRentals = await userRentalsDB.getUserRentals(userId);
	for (let rental of existingRentals) {
		if (rental['game'] === gameName) {
			res.status(400).json({ error: 'Already renting game' });
			return;
		}
	}

	let result = await userRentalsDB.addRental(gameName, userId);
	res.json(result);
	return;

	// let alreadyExists = false;
	// for (let i =0 ; i < userRentals.length; i++){
	// 	if (gameName=== userRentals[i]){
	// 		alreadyExists = true
	// 	}
	// }
	// if (!alreadyExists){
	// 	userRentals.push(gameName);
	// }
	//console.log(userRentals);
});

app.get('/game/:game', async(req, res) => {
	const gameName = req.params.game;
	res.json({price: faker.finance.amount(), description: faker.lorem.sentences(), trailer: faker.internet.domainName()});
});

app.get('/communities/user/:userId', async (req, res) => {
	const userId = req.params.userId;
	const userCommunities = await communitiesDB.getUserCommunities(userId);
	let result = [];
	for (let community of userCommunities) {
		result.push(community['game']);
	}
	res.json(result);
	return;
});

app.post('/communities/join', async (req, res) => {
	const options = req.body;
	addCommunity(res, options.game, options.user);
});

app.delete('/communities/delete', async (req, res) => {
	const options = req.body;
	deleteCommunity(res, options.game, options.user);
});

app.get('/login', async (req, res) => {
	const options = req.query;
	console.log(options)

	dbo.collection("users").find({"name": options.username}).toArray(function(err, result) {
		if (err) throw err;
		if (result.length === 0){
			res.status(400).json({ error: 'username does not exist' });			
		}
		else{
			let user = result[0];
			if (user['info']['password'] === options.password){
				res.status(200).json({message: 'success'});
			}
			else{
				res.status(400).json({ error: 'password is incorrect' });
			}
		}
	});	
});

app.post('/user/join', async (req, res) => {
	const options = req.body;
	addUser(res, options.auth);
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});