import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

export class GameRentalsDatabase {
	constructor(dburl) {
		this.dburl = dburl;
	}

	async connect() {
		this.client = await MongoClient.connect(this.dburl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});

		// Get the database.
		this.db = this.client.db('ugames');

		// Init the database.
		await this.init();
	}

	async init() {
		this.collection = this.db.collection('rentals');
	}

	// Close the pool.
	async close() {
		this.client.close();
	}

	async addRental(game, price, condition) {
		const res = await this.collection.insertOne({game, price, condition})
		return res;
	}

	async getGameRentals(game) {
		const res = await this.collection.find({ game: game }).toArray();
		return res;
	}

	async getAllRentals() {
		const res = await this.collection.find({}).toArray();
		return res;
	}
}

export class UserRentalsDatabase {
	constructor(dburl) {
		this.dburl = dburl;
	}

	async connect() {
		this.client = await MongoClient.connect(this.dburl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});

		// Get the database.
		this.db = this.client.db('ugames');

		// Init the database.
		await this.init();
	}

	async init() {
		this.collection = this.db.collection('userRentals');
	}

	// Close the pool.
	async close() {
		this.client.close();
	}

	async addRental(game, user) {
		const res = await this.collection.insertOne({ game, user})
		return res;
	}

	async getUserRentals(user) {
		const res = await this.collection.find({ user: user }).toArray();
		return res;
	}

	async getAllRentals() {
		const res = await this.collection.find({}).toArray();
		return res;
	}
}

export class CommunitiesDatabase {
	constructor(dburl) {
		this.dburl = dburl;
	}

	async connect() {
		this.client = await MongoClient.connect(this.dburl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});

		// Get the database.
		this.db = this.client.db('ugames');

		// Init the database.
		await this.init();
	}

	async init() {
		this.collection = this.db.collection('communities');
	}

	// Close the pool.
	async close() {
		this.client.close();
	}

	async addComm(game) {
		const res = await this.collection.insertOne({game})
		return res;
	}

    async deleteComm(game) {
		const res = await this.collection.insertOne({game})
		return res;
	}

	// async getGameRentals(game) {
	// 	const res = await this.collection.find({ game: game }).toArray();
	// 	return res;
	// }

	// async getAllRentals() {
	// 	const res = await this.collection.find({}).toArray();
	// 	return res;
	// }
}

