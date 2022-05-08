## Database

Our application uses the MongoDB Atlas database. The database stores user account information, communities a user joined, and a user's rental listings. Below are the structures of our collections. 

### User Account Information

users document

{
	name: username
	info:{
	 password: password
   }
}

In this structure we simply store the user name with the key name and query the database using the username. The password and other userinfo is stored as part of an objet in the info field.

### Communities

communities document
{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_id: ObjectId1,\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game: String\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user: String\
}

- game: The name of the game community the user is a part of.
- user: The username of user

### Rentals

rentals document
{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_id: ObjectId1,\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game: String, \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price: String, \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;condition: String\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;seller: String

}
 
- game: The name of the game the user is renting out.  
- price: The price of the game the user wants to sell it for.
- condition: The condition of the game. 
- seller: The user that is renting out game. 

### User Rentals

userRentals document 
{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_id: ObjectId1,\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game: String, \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user: String, \
}

- game: The name of the game the user rented.
- user: The current user.
