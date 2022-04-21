# Application APIs

## /addGame

* Adds a rental listing to the website. 
* Sends a POST request to the server. 

## /communities/name={gameName or gameID}

* Retrieve the community for a particular game.
* Sends a GET request to the server. 

## /communities/user={userID}/join?community={communityID}

* Allows the user to join a community. The particular community is displayed in the communities page.
* Sends a POST request to the server. 

## /communities/delete/user={userID}?name={communityName}

* Deletes a community the user is a part of.
* Send a DELETE request to the server. 

 
