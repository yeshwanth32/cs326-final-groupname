export async function createListing(game, price, condition, seller) {
	const response = await fetch(`/addGame`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({game: game, price: price, condition: condition, seller: seller}),
	});
	const data = await response.json();
	return data;
}


export async function addRental(game, user) {
	const response = await fetch(`/rent`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({game: game, user: user}),
	});
	const data = await response.json();
	return data;
}


export async function readListings(game) {
	try {
		const response = await fetch(`/games/${game}`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}


export async function readUserRentals(user){
	try {
		const response = await fetch(`/rentals/user/${user}`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

export async function getGameDetails(game){
	try {
		const response = await fetch("/game/name="+game, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

export async function readCommunities(user) {
	try {
		const response = await fetch(`/communities/user/${user}`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

export async function createCommunity(game, user) {
	const response = await fetch(`/communities/join`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ game: game, user: user}),
	});
	const data = await response.json();
	return data;
}

export async function deleteCommunity(game, user) {
	const response = await fetch(`/communities/delete`, {
	  method: 'DELETE',
	  body: JSON.stringify({ game: game, user: user }),
	  headers: {
		'Content-Type': 'application/json',
	  },
	});
	const data = await response.json();
	return data;
}

export async function login(username, password) {
	try {
		const response = await fetch(`/login?username=${username}&password=${password}`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

export async function createUser(auth) {
	const response = await fetch(`/user/join`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({auth: auth}),
	});
	return response;
}

