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

# Client Interface

## Sign Up 

Below we are allowing a user to sign up. This is for creating a user. This is an example of create. 

![image](https://user-images.githubusercontent.com/56751146/164364276-a0ded937-828c-4ced-a743-97b31003d487.png)


## Add Rental

Below we are adding a rental game. We are providing information about the game's name, price, and condition. This is an example of create.  

![image](https://user-images.githubusercontent.com/56751146/164360649-3f1032d7-eeaf-4171-a101-376a43b88af5.png)

Upon clicking the Submit button the rental is displayed under the respective game. 

![image](https://user-images.githubusercontent.com/56751146/164361305-35392507-b72b-4b5c-937b-f97f659fd19b.png)

## Display Rentals

Below we are displaying the games a user has rented. This is an example of read. 

![image](https://user-images.githubusercontent.com/56751146/164364775-c23ee5fe-339f-4405-89b9-8e7014596188.png)


## Join Community

Upon clicking the Join Community button below the game community will be displayed on the communities page. This is an example of create.   

![image](https://user-images.githubusercontent.com/56751146/164362262-0e594cb2-19ad-4276-b126-c5939e2f6ffa.png)

Upon joining a particular game's community it gets displayed in the communities page below. 

![image](https://user-images.githubusercontent.com/56751146/164362610-732c377b-6c9e-4e79-a9d2-e27309bda750.png)

## Delete Community 

Upon clicking the delete button of a community that particular community will get deleted for the user. This is an example of delete. 
Below we are clicking on the delete icon of the Spider-Man: Miles Morales game. 

![image](https://user-images.githubusercontent.com/56751146/164362951-12b7dfbf-2d1e-4a4e-bc03-f481e02726a7.png)

After clicking on the delete button we can see that Spider-Man: Miles Morales game has been deleted. 

![image](https://user-images.githubusercontent.com/56751146/164363344-d4a1cdde-e2c3-418a-a7ac-ffaa278bbb1e.png)

# Heroku Application Link 

https://umass-games.herokuapp.com/

# Breakdown of the Division of Labor 

### Aryaan Bomma 

* Contributed to API planning.
* Worked on the following endpoints: /addGame, /games/:game, /communities, /communities/join, /login 
* Implemented functionality on the client side to perform CRUD operations on the endpoints I worked on, and render accordingly to the frontend.  
* Provided assistance to teammates whenever it was needed.

### Yeshwanth Bommareddy 

* Worked on brainstorming the api endpoints. 
* Added the route to retreive the game data from the server, and when the server responds with a faker js I display the data with the game. 
* Added the route to add a rental listing to the user when they press the rent button on a game listing.
* On the user page, retreived all the games rented by them (including some defaults) and display them.
* Worked on debugging and coordinating with teammates.

### Rohan Adla 

* Added the front end for the login pages. 
* Created the API for new registration. 
* Worked on /user/join endpoint.  
* Helped with user rentals and information page. 
* Provided assistance to teammates whenever it was needed.








