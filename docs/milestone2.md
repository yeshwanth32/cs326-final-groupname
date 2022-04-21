# Application APIs

## /user/join

* Allows a new user to register on the sign up page. 
* Sends a POST request to the server. 

## /login

* Allows an already existing user to login. 
* Sends a GET request to the server. 
 
## /addGame

* Adds a rental listing to the website. 
* Sends a POST request to the server. 

## /communities

* Retrieve the community for a particular game.
* Sends a GET request to the server. 

## /communities/join

* Allows the user to join a community. The particular community is displayed in the communities page.
* Sends a POST request to the server. 

## /communities/delete

* Deletes a community the user is a part of.
* Send a DELETE request to the server. 

## /games/:game

* Retrieves information about a rental game. Provides the game's name, price, and condition. 
* Sends a GET request to the server. 

## /game/:game

* Displays a game's description. 
* Sends a GET request to the server. 


