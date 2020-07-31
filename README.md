## Deere Project 2 Starter Code

## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=pancakes
   ```

1. Check out your `config/config.json` file. You'll need to create a database called `project2_development`
1. Sequelize is included in the app. You have a `User` model. Run `db:migrate` to create the `Users` table in your database.
1. Run `nodemon` and go to the Homepage: `localhost:3000/`

![](https://i.imgur.com/uuhrOxQ.png)

<br>

## User Stories
As a user I can:

register as a user on the site
log in to the site once registered
add new recipes to the site (when logged in)
edit recipes I create on the site (when logged in)
delete any recipes I created on the site (when logged in)
view a list of recipes stored on the site
search the list of recipes by a recipe name
filter the list of recipes by type
sort the list of recipes in alphabetical order, either ascending or descending
click on a recipe to see information about the recipe
see the ingredients for a selected recipe
read the instructions for preparing the recipe
see what category a recipe relates to


## Routes

You have the following routes available.

#### controllers/authController.js

- GET and POST `localhost:3000/auth/signup`
- GET and POST `localhost:3000/auth/login`
- GET `localhost:3000/auth/logout`

#### controllers/usersController.js

- GET `localhost:3000/profile/:id`

<br>

## Additional Resources

- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)
