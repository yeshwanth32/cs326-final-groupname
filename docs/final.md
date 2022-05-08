# Team Bandits

## UMass Game Exchange

## Spring 2022

## Overview

UMass Game Exchange is a platform that brings gamers together. This is a website where you can rent out games to UMass students or borrow games from UMass students. Users can also join various gaming communities. Our application is innovative as it serves as a platform for gamers in UMass to try out new games by renting games or making some money by renting out their old games. This can be board games, console games etc.  

## Team Members

1. Aryaan Bomma - aryaanb
2. Keerthana Mandava - KM090901
3. Rohan Adla - rohan-ynwa
4. Yeshwanth Bommareddy - yeshwanth32

## User Interface

### Login Page

* This is where already existing users login. 

![image](https://user-images.githubusercontent.com/56751146/167276132-84c36794-faa0-494a-b0bf-782ec951a2aa.png)

### Sign Up Page

* If you are a new user click on the sign up button on the page above. This will display the page below and allow a new user to sign up. 

![image](https://user-images.githubusercontent.com/56751146/167277786-419a27f0-6374-4353-b6e1-d538c875ffe8.png)

### User Homepage

* This page displays all the games rented by the user. 

![image](https://user-images.githubusercontent.com/56751146/167276116-2e9b73fc-1cfc-47f8-b166-6866f08a0d55.png)

### Game Description

* Upon clicking on a game above you can view the game's description. You can also join the game's community by clicking on the join community button. 

![image](https://user-images.githubusercontent.com/56751146/167276163-6c6a2cfd-bc20-49f2-a6ea-154c3730ab16.png)

### Discover Page

* This page displays all available games. 

![image](https://user-images.githubusercontent.com/56751146/167276190-a2226823-8de1-481a-afcb-7bdc8dbe9bcc.png)
### Game Description Rentals

* Upon clicking on one of the games above the game's descriptions appears. You can join the game's community from here. This page also displayes available rental listings for that particular game. 

![image](https://user-images.githubusercontent.com/56751146/167276215-948fcbba-4019-40b8-ac86-8582c792ea10.png)
### Add Game 

* On this page you can add a game to rent out. 

![image](https://user-images.githubusercontent.com/56751146/167276221-c6ab294d-ce1b-4971-b988-15e67af43121.png)
### Incomplete Add Game 

* If a user tries to add a rental listing without filling out all the fields the page is displayed below. 

![image](https://user-images.githubusercontent.com/56751146/167276243-ae631423-0557-4d00-bc18-6e4436f5058a.png)

### Communities Page

* Upon clicking on the join communities button in either the game description page or the game description rentals page that particular game gets displayed here on the communities page. 

![image](https://user-images.githubusercontent.com/56751146/167276292-abe1cdd7-904b-476c-96ab-c4132f3b2c18.png)

### Delete a Community 

* You can click on the delete button to delete a community. 

![image](https://user-images.githubusercontent.com/56751146/167276328-2747127f-9f54-497c-a2c7-085b66c63ca4.png)

### Joining Same Community

* Attemting to join a community that you are already a part of will result in an alert shown below. 

![image](https://user-images.githubusercontent.com/56751146/167276376-e876d57d-ee95-4b95-b88b-c2d57764168f.png)

## Application APIs

### /user/join

* Allows a new user to register on the sign up page. 
* Sends a POST request to the server. 

### /login

* Allows an already existing user to login. 
* Sends a GET request to the server. 
 
### /addGame

* Adds a rental listing to the website. 
* Sends a POST request to the server. 

### /communities

* Retrieve the community for a particular game.
* Sends a GET request to the server. 

### /communities/join

* Allows the user to join a community. The particular community is displayed in the communities page.
* Sends a POST request to the server. 

### /communities/delete

* Deletes a community the user is a part of.
* Send a DELETE request to the server. 

### /games/:game

* Retrieves information about a rental game. Provides the game's name, price, and condition. 
* Sends a GET request to the server. 

### /game/:game

* Displays a game's description. 
* Sends a GET request to the server. 

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

## URL Routes/Mappings

## https://umass-games.herokuapp.com/groups.html

This website shows all the list of communities avalable for each game

## https://umass-games.herokuapp.com/index.html

* This discover page for the website. Here you can see all the games that have listings

## https://umass-games.herokuapp.com/loggedin.html

* This is the landing page after a user has logged in. This includes the rental listings 

## https://umass-games.herokuapp.com/login.html

* Lets the user login with their username and password

## https://umass-games.herokuapp.com/register.html

* Lets the user create an account


 


## Authentication/Authorization

we store the username and password in the mongodb database when the user registers using the register page. When the user tries to log in, we query the databse using the user id and the server verifies with the password to see if they match. If it does then we mark the user as logged in and store the logged in username in local storage. If the user logs in again we update these values with the new user log in. If the user logs out we simply update the loggedin vraiable in local storage to false.


## Division of Labor

### Yeshwanth Bommareddy:
Created user profile page and assisted where needed. 
Worked on brainstorming the api endpoints.
Added the route to retreive the game data from the server, and when the server responds with a faker js I display the data with the game.
Added the route to add a rental listing to the user when they press the rent button on a game listing.
On the user page, retreived all the games rented by them (including some defaults) and display them.
Worked on debugging and coordinating with teammates.

### Keerthana Mandava:
Created communities page, contributed to milestone1.md, and assisted where needed.
Contributed to API planning.
Created the /communities/delete endpoint.
Added error handling to /addGame, /communities/join, and /communities/delete endpoints.
Wrote the deleteCommunity function to perform CRUD operations on the server and made sure any changes made on the server are reflected on the front end.
Added functionality to make sure a user can not join the same community again.
Made changes to the frontend of the Add Game page to make it fully functional.
Created the milestone2.md document.

### Aryaan Bomma:
Created Add Games page, contributed to milestone1.md, and assisted where needed.
Contributed to API planning.
Worked on the following endpoints: /addGame, /games/:game, /communities, /communities/join, /login
Implemented functionality on the client side to perform CRUD operations on the endpoints I worked on, and render accordingly to the frontend.
Provided assistance to teammates whenever it was needed.

### Rohan Adla:
Created wireframes, website framework, discover page, and assisted where needed.
Added the front end for the login pages.
Created the API for new registration.
Worked on /user/join endpoint.
Helped with user rentals and information page.
Provided assistance to teammates whenever it was needed.

## Conclusion

Through working on this project, we all feel like we have learned a lot. Being able to create an app using new technologies, from coming up with ideas to deploying it was a challenging experience. As all of us worked on various steps of building the application, it helped us fill out gaps in our knowledge of full-stack development and help/learn from others who have more experience in a specific area (such as front end or back end). 

Most of the difficulty lie in finding appropriate technologies and choosing one that is ideal for our application. An example of this was choosing a way to try and encrypt and decrypt passwords using external libraries such as CryptoJS. This was difficult given the time we had and if we knew what specific libraries to use beforehand, we may have been able to fully implement that. We also had similar issues with the Twitch api to get game information and we spent significant time trying to find a functional api with similar data. 

## Grading Rubric 

### Sign-Up (10 points):

- New users should create a username, and password, and enter their email address on the Log in/Sign up page.

### Log In (10 points):
 - Already existing users should be able to log in using their username and password.

### Log Out (10 points):

- Upon clicking the log out button the application logs out the current user.

### Join Community Button Works (10 points):

- On the discover page, upon clicking on a game the join community button will appear. If you click on the join community button it should add the game’s community to the community page.

### Delete Community (10 points): 

- On the communities page, if you click on the delete button of a particular community it should delete that community. Even after refreshing the page that community will not appear unless you add it back.

### Add Game (10 points): 

- On the add game page, you should fill out all the fields and click on the submit button. To check if your game has been added or not,  go to the discover page and click on the game you selected to add. Your rental listing should appear.

### Rent Button Works (10 points): 

- On the discover page go to the rental you just added. If you click on the rent button the game should appear on the homepage in the list of games added.

### Cannot Join Same Community Twice (10 points): 

- Join a game's community. Now try to join the same game’s community by clicking on the join community button. Trying to join a community again will result in an alert popping up prompting that you are already a part of this community

### Database Implementation (10 points):

- We used a MongoDB database to handle all CRUD operations.

### Heroku Implementation (10 points):

- Our website is visible here: https://umass-games.herokuapp.com/





