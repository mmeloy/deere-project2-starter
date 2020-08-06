const express = require("express");
const recipe = require("../models/recipe");
const router = express.Router();

// Add recipe model
const Recipe = require("../models").Recipe;
const User = require("../models").User;
const Category = require("../models").Category;

// NEW ROUTE - SEND EMPTY FORM
router.get("recipes/new", (req, res) => {
        res.render("new.ejs");
});

//INDEX ROUTE - GET ALL THE RECIPES
router.get("/", (req, res) => {
  Recipe.findAll().then((recipes) => {
    res.render("recipes/index.ejs", {
      recipes: recipes,
    });
  });
});

// NEW ROUTE - SEND EMPTY FORM
router.get("/new", (req, res) => {
  res.render("recipes/new.ejs");
});

// SHOW ROUTE - GET ONE RECIPE
router.get("/:id", (req, res) => {
  Recipe.findByPk(req.params.id, {
    // include: [
    //   {
    //     model: User,
    //     attributes: ["name"],
    //   },
    //   {
    //     model: Category,
    //   },
    // ],
    // attributes: ["title", "description", "category", "owner", "ingredients", "instructions"],
  }).then((recipe) => {
    res.render("recipes/show.ejs", {
      recipe: recipe,
    });
  });
});

//POST ROUTE - TAKES THE FORM DATA AND CREATES A NEW RECIPE
router.post("/", (req, res) => {
    Recipe.create(req.body).then((newRecipe) => {
    res.redirect("/recipes");
  });
});

router.get("/:id/edit", function (req, res) {
      Recipe.findByPk(req.params.id).then((foundRecipe) => {
    res.render("recipes/edit.ejs", {
      recipe: foundRecipe,
    });
  });
});


//UPDATE Route
router.put("/:id", (req, res) => {
  console.log(req.body);
  

  Recipe.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedRecipe) => {
    
      Recipe.findByPk(req.params.id).then((foundRecipe) => {
        
        res.redirect("/recipes");
      });
    });
  });

// DELETE A RECIPE
router.delete("/:id", (req, res) => {
  Recipe.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/recipes");
  });
});

module.exports = router;



