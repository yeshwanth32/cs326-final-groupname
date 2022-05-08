## Database

Our application uses the MongoDB Atlas database. The database stores user account information, communities a user joined, and a user's rental listings. Below are the structures of our collections. 

### User Account Information

users document

{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: String\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info:{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: String\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\
}

- name: The username of user. 
- password: The user's password.

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


## Division of Labor

### Yeshwanth Bommareddy:
For the final milestone, worked on authentication integration with mongodb as well as session storage. Also worked on filling out markdown files as well as coordinating with teammates

### Rohan Adla:
Worked on added ux and ui elements to front end
Worked on user and password authentication and trying to set up cryptojs
Worked on debugging and coordinating with teammates.
Helped write documentation

### Aryaan Bomma:
- Implemented login and logout functionality.
- Implemented database functionality for rental listings and user rentals.
- Contributed to database planning.
- Provided assistance to teammates whenever it was needed
