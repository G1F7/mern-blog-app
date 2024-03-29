## Technologies

This project uses:

- HTML
- CSS
- Javascript
- Node
- React
- React Bootstrap
- Express
- MongoDB
- JSON Web Tokens (JWT)
- Jest, Mocha and Chai (for testing)

## Installation

1. Log into your MongoDB account.

2. Copy the project files of this app to a directory called 'blog' on your local machine.

3. Navigate to this directory from the command line interface. E.g. cd c:/blog. This is the backend of the application.

4. Open the "server/index.js" file of this app using any text editor and scroll down to the authentication details.

5. Refer to your connection string from step 4 above and replace the username (1), password (2), cluster (3) and dbname (4) in the code of "index.js" with the correct details from your own connection string. For example, if your database username is "maxwell", then you will change the line at number 1 in the figure below to `const username = "maxwell";`.

6. Save the changes to the "index.js" file.

7. In the command line interface, type 'npm install'.

8. Once it has finished installing, type 'npm start'.

9. Now navigate to the "/react-ui" directory inside "blog" (this is the frontend of the app). E.g. cd c:/blog/react-ui.

10. In the command line interface, once again type 'npm install'.

11. Once it has finished installing, type 'npm start'.

12. You have now started both the backend and frontend servers.

13. Open [http://localhost:3000](http://localhost:3000) to view the project in your web browser.

## System Architecture

I will be creating a blog app for this task. It will be built using the MERN stack (MongoDB, Express, React and Node) with a React.js front end.

I will be using React Bootstrap to aid me in styling the app attractively, since I am very familiar with using bootstrap and I think the end result looks great. I also firmly believe in using libraries such as bootstrap to make my job of coding easier and quicker. My app will have an Express backend server that will read, write, update and delete data from MongoDB using a REST api. I will use JSON Web Tokens (JWT) for authentication and the users will be able to log in using Facebook, Google or their own username and password. Users with Admin rights will be able to modify other user's blog data, while non-admin users will only be able to modify their own blog data. However, any visitor to the website will be able to view all the user's blog entries without having to log into the system.

I will make use of a modular approach when coding this app, with many separate "Components" and functions to simplify things and make the code easier to understand and maintain in the future. I will also make use of different "Routes" for the same reason.

## System Requirements Specification

### How this app will work

When a user first lands on the page, they will be able to view the blog articles that other users have created. They will be able to select which user's blogs to view by clicking on the user's name in the menu on the left side of the page. Each blog will only show part of the article, so that it doesn't take up too much space on the page. However, if the user clicks on the "Read more..." link, they will be taken to a page that allows them to read the whole article.

User's who would like to create their own blog posts will be able to click the "Register" button in the header and enter their username and password (or register with Facebook/Google). Once they have registered and logged in with their credentials, they will be able to create their first blog article. They will be able to save it, update it or delete it later on, should they choose to. All their articles will be saved to the MongoDB database, so that they remain accessable next time the user visits the website. Other web visitors will be able to view their articles, but will obviously not be able to modify them. Only an authenticated user can modify their own blog posts.

There will be one user with "Admin" rights who will be able to modify any other user's blog articles. All other users will be "non-admin" and will only be able to modify their own blogs.

### Who will use the app and why

Anyone can utilise this blog app and will be able to enjoy having the freedom to voice their opinions and experiences in the public space, while retaining anonymity, should they wish to keep their identity a secret. Of course, they are also free to use their real name as well. This blog can also serve as an online diary or journal for people who want to get their thoughts written down as a form of therapy or just a way to make sense of their experiences. Since the app saves all their articles in the cloud, it removes the need for them to consider backups, which will be very appealing to many people. Having their articles online is also superior to writing them down in a physical notebook in many cases, as some people may not want family members or friends to discover and read their private thoughts.

### Other similar websites

The 2 most popular blogging platforms on the web today are "Wix" and "Wordpress". My blog application will differ from these platforms, in that it will be much simpler and with fewer features. This is an advantage and will be a refreshing change for many users, as it will reduce the learning curve for people new to blogging. There will be no need to spend hours trying to figure out how to set up a blog, and it will also encourage older users who have very little IT experience, since they would be put off by more complex interfaces.

My blog will appeal to users who desire a clean and neat interface with minimal bells and whistles. It will do one thing (allow users to blog), but it will do that thing very well indeed. Perhaps some users will decide later on that they want more complex functionality, and they may migrate to other, more well known platforms, but this app will be a great place for anyone to start their blogging journey.

### Functional Requirements

1. Register new user with Facebook, Google or their username and password
2. Log in
3. Log out
4. Add new blog article
5. Update/edit existing blog article
6. Delete blog article
7. View existing articles from all users
8. View articles from a specific user only
9. Admin - Edit any user's blog article
10. Admin - Delete any user's blog article
11. Admin - Remove user from system

### User Stories

1. Register new user - User clicks on the "Register" button and are taken to a page that gives them the option of registering with their username and password, with Facebook or with Google. Once they have made their selection, the system encrypts their password, then saves their login details in the MongoDB database. They are then taken back the main page. A popup message appears asking them to log in with their new credentials.

2. User logs in - User types in their username and password and then clicks the "Login" button, or they click the "Login with Facebook" or "Login with Google" button. If the system does not recognise their login details, they will be shown a popup message letting them know they are not recognised and that they should either double check their login details or click the register button. When they are successfully logged in, they will see a welcome message in the header, next to a "Logout" button. They will also be able to add, edit or delete blog articles on the page.

3. User logs out - User clicks on the "Logout" button in the header section and sees a popup message that lets them know they have been logged out. They can, however, still view the articles posted by other people. The status of the system will be updated to indicate that there are no currently logged in users.

4. Add new blog article - Logged in user clicks on the "Create New Post" button and is taken to a new page. User clicks in the "Title" field and enters a title for their new blog, then clicks in the "Body" text box and types their blog post/article. Once they are finished, they can either click the "Discard" button at the bottom of their article to discard it or click on "Save" to save it. If they click the "Save" button, the user's username, the title, the article and a time stamp are saved to the Mongo database and the user sees a popup message to say "Blog article saved". They will then see the new article at the top of their list of existing articles on the page.

5. Update/edit blog article - Logged in user scrolls down list of their existing blog articles. Each article shows the date created, date modified, title and the article itself. Each article also has an "Update" button and a "Delete" button. User clicks the "Update" button for the article they would like to modify and they are taken to a page that allows them to edit the title and article body. Once they have made the changes they want, they can click the "Cancel" button at the bottom to discard their changes or click the "Update" button to save changes. When they click "Update", the MongoDB entry is updated with the new title and article body, as well as the new "modified" time stamp.

6. Delete blog article - Logged in user scrolls through their existing blogs and chooses the one they want to delete. They click on the "Delete" button for that blog article and are shown a popup message that asks if they are sure they want to delete it. If they click "Yes", they are shown another popup message to say the article was successfully deleted. The article is then removed from the Mongo database.

### Non-functional Requirements

#### Usability

1. The blog app should have a simple and intuitive user interface similar to other blog websites that user's may have seen elsewhere. I am not trying to develop something vastly different or complex here, since that will detract from the overall user experience.

2. The position and appearance of buttons, navigational links and content will conform to normal web standards that most user's should be familiar with. Effort will be made to ensure that users do not need to consult a help file to use the interface (although there will be one just in case they need it).

3. Forms will have some basic validation to make sure users can't submit blank forms or accidentally delete blog articles (i.e. they will be shown a warning message if they try to do either of these things).

4. There will be various elements on the page to ensure that users always know where they are (breadcrumbs) and whether they are logged in or logged out (message at top right of page) to reduce confusion.

5. Help will be easy to find, should users require it. Link to help file will be clearly visible in header of page.

#### Reliability

1. Error messages will be clear and helpful, rather than the usual, confusing messages.

2. As stated above, validation will reduce issues due to users entering blank form fields or accidentally deleting articles.

3. App will use MongoDB for the database. This eliminates the need to be worried about backing up blog articles, since that is all handled by MongoDB.

4. Mongo also allows for upgrades/updates to the database with no downtime to the website.

#### Performance

This app will be built using the "Create react app" starter kit created by Facebook. This not only makes it much quicker and easier for me to code my app, but improves the speed of the website by using a "virtual DOM", instead of rewriting the DOM every time a change is made to the HTML of the page.

This app will use MongoDB as a database, which is a huge advantage for performance, as there is no need for downtime when upgrading or scaling the database up. This is because Mongo uses a NoSQL database structure.

#### Implementation Requirements

1. This app should be completely web browser based.
2. It must be created using the MERN stack (MongoDB, Express, React and Node).
3. It must have a detailed help file that a user can easily find.

## Security

1. Only users that have been authenticated with a valid JSON Web Token (JWT) will be permitted to modify blog posts, and they will only ever be able to modify their own posts. Only the single Admin user will have rights to modify any user's blog articles.

2. "Helmet" Express middleware will be used by the Express backend to further tighten up security. See [https://www.npmjs.com/package/helmet](https://www.npmjs.com/package/helmet) for details.

## Wireframes

I created wireframes of how I wanted the user interface (UI) of this app to look before I started coding it. I used Draw.io (https://www.diagrams.net/) to create/plan them.
